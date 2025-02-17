import { axios } from "@/service/axios";
import { AuthenticatedFields } from "@/types/app/auth.types";

async function requestTokenAuthorize<T>(body: AuthenticatedFields): Promise<T> {
    "use server"

    try {
        const data = await axios.post<T, AuthenticatedFields>("/api/token/", body);
        return data;
    } catch(error) {
        console.error(error)
        throw error
    }
}

async function refreshAccessToken(token: string) {
    try {
        const data = {
            refresh: token
        }
        const resData = await axios.post<{access: string, access_expires_in: number}, {refresh: string}>(
            "/api/v1/refresh/",
            data
        )
        return {
            accessToken: resData.access,
            accessTokenExpires: resData.access_expires_in * 300,
            refreshToken: token
        }
    } catch(error) {
        console.error(error)
        throw error
    }
}

export {requestTokenAuthorize, refreshAccessToken};
