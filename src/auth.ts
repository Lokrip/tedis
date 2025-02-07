import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "next-auth";
import { NextAuthOptions } from "next-auth";
import pages from "./service/route";
import AxiosClient, { axios } from "./service/axios";
import { AuthenticatedFields, JWTTokenType, JWTUser } from "./types/app/auth.types";
import { JWT } from "next-auth/jwt";

//Функция toFormData(obj: any) принимает объект obj и преобразует его в строку формата application/x-www-form-urlencoded, где ключи и значения кодируются с помощью encodeURIComponent.
function toFormData(obj: any) {
    const formBody = [];
    for(const property in obj) {
        // Функция encodeURIComponent кодирует строку так, чтобы её можно было безопасно
        // использовать в URL. Она заменяет специальные символы (например, пробелы, =, &, ?, /, #)
        // на их URL-кодированные эквиваленты
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(obj[property]);
        formBody.push(`${encodedKey}=${encodedValue}`)
    }

    return formBody.join("&");
}

const authConfig: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),

        CredentialsProvider({
            name: "AuthCredentials",
            credentials: {
                email: {label: "Username", type:"text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const data: AuthenticatedFields  = {
                    email: credentials.email,
                    password: credentials.password
                }
                try {
                    const resData = await axios.post<any, AuthenticatedFields>(
                        "/api/token/",
                        data,
                        {"Content-Type": "application/json"}
                    )

                    const { access, refresh, id, username, email } = resData;

                    return {
                        id: String(id),
                        username: username,
                        email: email,
                        accessToken: access,
                        refreshToken: refresh
                    } as JWTUser

                } catch(error) {
                    console.error('Authorization error:', error);
                    return null;
                }
            },
        })
    ],
    pages: {
        signIn: pages.login
    },
    session: {strategy: "jwt"},
    // Обратные вызовы : callbacksраздел определяет функции для манипулирования
    // объектами JWT и сеанса. Например, jwtобратный вызов объединяет
    // пользовательские данные в токен, гарантируя, что вся необходимая информация о
    // пользователе доступна в токене для последующих запросов.
    callbacks: { //В NextAuth.js callbacks используются для обработки и модификации данных во время аутентификации. Давай разберем, что делают два конкретных callback'а:
        //Этот callback вызывается при каждом обновлении JWT-токена.
        //Первый раз вызывается при входе пользователя signIn, и объект user содержит данные о пользователе из базы или OAuth.
        //Дальше вызывается при каждом обновлении сессии, но user уже ничего нет, потому что он передается только при первом вызове.
        async jwt({token, user}) {
            const jwtUser = user as JWTUser

            if(user) {
                token.accessToken = jwtUser.accessToken;
                token.refreshToken = jwtUser.refreshToken;
            }

            return token;
        },
        //Этот callback вызывается при создании сессии (например, при запросе /api/auth/session).
        //session — объект сессии, который NextAuth передает в клиент.
        //token — JWT-токен, который мы изменили в jwt.
        async session ({session, token}) {
            //Заменяет session.user на token, то есть передает в сессию все данные, которые были добавлены в токен на этапе jwt.
            session.user = {
                ...session.user,
                accessToken: token.accessToken,
                refreshToken: token.refreshToken
            } as JWTUser

            return session;
        }
    }
}

export default authConfig;
