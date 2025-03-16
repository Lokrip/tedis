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

async function refreshAccessToken(token: {
    accessTokenExpires: number;
    accessToken: string;
    refreshToken: string;
}) {
    try {
        const data = {
            refresh: token.refreshToken
        }
        const resData = await axios.post<{access: string, refresh: string, access_expires_in: number}, {refresh: string}>(
            "/api/token/refresh/",
            data
        )

        return {
            ...token,
            accessToken: resData.access,
            refreshToken: resData.refresh,
            accessTokenExpires: resData.access_expires_in * 1000,
        }
    } catch(error) {
        console.error(error)
        throw error
    }
}

export {requestTokenAuthorize, refreshAccessToken};
