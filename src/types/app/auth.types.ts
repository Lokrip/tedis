import { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { ChangeEvent, FormEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface AuthenticatedFields {
    email: string;
    password: string
}

export interface LoginFields extends AuthenticatedFields {
}

export interface RegisterFields extends AuthenticatedFields {
    first_name: string,
    last_name: string,
    username: string
}


export interface CustomJWTType extends JWT {
    accessTokenExpires: number;
    accessToken: string;
    refreshToken: string;
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


export type TypeAuthMethod = 'Login' | 'Register'

export interface IAuthFieldsEvent {
    errors: FieldErrors<RegisterFields & LoginFields>
    register: UseFormRegister<RegisterFields & LoginFields>;
    onChangeEmail?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IAuth {
    type?: TypeAuthMethod
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


export interface TypeAuthFields {
    Login: React.FC<IAuthFieldsEvent>,
    Register: React.FC<IAuthFieldsEvent>,
}


export type AuthFormData = {
    email: string
    password: string
}

export type LoginFormData = AuthFormData;
export type RegisterFormData = AuthFormData & {
    first_name: string,
    last_name: string,
    username: string
}

export type LoginRegisterFormData = LoginFormData | RegisterFormData;
