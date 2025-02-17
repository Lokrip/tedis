import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth";
import { AuthenticatedFields, JWTUser, ReponseUserToken } from "./types/app/auth.types";
import pages from "./service/route";

import { requestTokenAuthorize, refreshAccessToken } from "./core/api/token.api";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "AuthCredentials",
            credentials: {
                email: {label: "Email", type:"email", placeholder: "Email..."},
                password: {label: "Password", type: "password", placeholder: "Password..."}
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
                    const resData = await requestTokenAuthorize<ReponseUserToken>(data);

                    const { access, refresh, id, username, email, accessTokenExpires  } = resData;

                    return {
                        id: String(id),
                        username: username,
                        email: email,
                        accessToken: access,
                        refreshToken: refresh,
                        accessTokenExpires: accessTokenExpires
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

    // Обратные вызовы — это асинхронные функции, которые можно использовать
    // для управления событиями, происходящими при выполнении действия.
    callbacks: {
        async jwt({token, user}) {
            const jwtUser = user as JWTUser

            console.log(token, user)
            if(user) {
                return {
                    user,
                    accessToken: jwtUser.accessToken,
                    refreshToken: jwtUser.refreshToken,
                    accessTokenExpires: jwtUser.accessTokenExpires * 1000,
                }
            }

            if(Date.now() < (token.accessTokenExpires as number)) {
                return token;
            }

            return await refreshAccessToken(token.refreshToken as string);
        },

        async session ({session, token}) {
            session.user = {
                ...session.user,
                accessToken: token.accessToken,
                refreshToken: token.refreshToken
            } as JWTUser

            return session;
        }
    }
}
