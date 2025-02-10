import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth";
import { AuthenticatedFields, JWTUser } from "./types/app/auth.types";
import pages from "./service/route";

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
                    const resData = await fetch(
                        `${process.env.PRODUCT_API_URL}/api/token/`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(data)
                        }
                    )

                    const { access, refresh, id, username, email } = await resData.json();

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

    // Обратные вызовы — это асинхронные функции, которые можно использовать
    // для управления событиями, происходящими при выполнении действия.
    callbacks: {
        async jwt({token, user}) {
            const jwtUser = user as JWTUser

            if(user) {
                token.accessToken = jwtUser.accessToken;
                token.id = jwtUser.refreshToken;
            }

            return token;
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
