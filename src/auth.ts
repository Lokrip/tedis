import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "next-auth";

const authConfig = {
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

                const user = {id: String(1), email: 'admin@gmail.com', password: 'lol1234lol1234'}

                if (user && user.password == credentials.password) {
                    return {
                        id: String(1), 
                        email: 'admin@gmail.com', 
                        password: 'lol1234lol1234'
                    } as User;
                }

                return null;
            },
        })
    ]
}

export default authConfig;