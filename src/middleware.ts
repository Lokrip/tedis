import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import pages from "./service/route";

export async function middleware(request: NextRequest) {
    //если jwt токен у текущего пользователя есть то показываем страницу если нет перенапровляем
    const pathname = new URL(request.url).pathname 
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if(pathname === pages.login && token) {
        return NextResponse.redirect(new URL(
            pages.profile, 
            request.url
        ));
    }

    if(pathname === pages.profile && !token) {
        return NextResponse.redirect(new URL(
            pages.login, 
            request.url
        ));
    } 

    return NextResponse.next();
}


export const config = {
    matcher: [pages.profile, pages.login]
}