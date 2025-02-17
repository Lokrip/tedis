import { User } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface AuthenticatedFields {
    email: string;
    password: string
}

export interface JWTTokenType extends JWT {
    accessToken: string,
    refreshToken: string
}

export interface JWTUser extends User {
    accessToken: string,
    refreshToken: string,
    accessTokenExpires: number
}

export interface ReponseUserToken {
    access: string;
    refresh: string;
    id: number;
    username: string;
    email: string;
    accessTokenExpires: number
}
