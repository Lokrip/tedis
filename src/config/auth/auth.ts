import { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import Credentials from 'next-auth/providers/credentials';
import axios from "axios";

interface NewUser extends User {
    accessToken: string; 
    refreshToken: string
}

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        Credentials({
            //Имя, которое будет отображаться в форме входа (например, «Войти с помощью...»)
            name: 'Credentials',
            credentials: {
                username: {label: 'Username', type: 'text', placeholder: 'Username', required: true},
                password: {label: 'password', type: 'password', placeholder: 'Password', required: true},
            },

            async authorize(credentials) {
                if (!credentials?.username || !credentials.password) {
                    return null;
                }

                try {

                    const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', {
                        username: credentials.username,
                        password: credentials.password
                    })

                    console.log(response)

                    const {access, refresh} = response.data

                    return {
                        name: credentials.username,
                        accessToken: access,
                        refreshToken: refresh,
                    } as NewUser;
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null;
                }
            }
        })

    ],
    
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.accessToken = (user as NewUser).accessToken
                token.refreshToken  = (user as NewUser).refreshToken
            }

            return token;
        },

        async session({ session, token }) {
            // Добавляем токены из JWT в объект сессии
            session.accessToken = token.accessToken as string;
            session.refreshToken = token.refreshToken as string;
            return session;
        },
    },
    session: {
        strategy: "jwt", // Используем JWT для хранения токенов
        // В секундах - сколько времени пройдет до истечения бездействующей сессии, после чего она станет недействительной.
        maxAge: 30 * 24 * 60 * 60, // 30 дней
      
        // В секундах - ограничение на частоту записи в базу данных для продления сессии.
        // Используйте, чтобы ограничить операции записи. Установите в 0, чтобы всегда обновлять базу данных.
        // Примечание: Этот параметр игнорируется при использовании JSON Web Tokens.
        updateAge: 24 * 60 * 60, // 24 часа
    },
    secret: process.env.NEXTAUTH_SECRET,
}