import { correctUrl } from "@/utils/utils";

class AxiosClient {
    private API_URL = process.env.PRODUCT_API_URL as string

    constructor(private defaultHeaders: Record<string, string> = {}) {
        this.defaultHeaders = defaultHeaders
    }
    
    async get<T>(
        path: string, 
        headers?: Record<string, string>, 
    ): Promise<T> {
        return this.fetch<T>(path, "GET", undefined, headers)
    }

    private async fetch<T>(
        path: string,
        method: string,
        body?: Record<string, any>,
        headers?: Record<string, string>,
    ): Promise<T> {
        const url = correctUrl(this.API_URL, path);
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': "application/json",
                    ...this.defaultHeaders,
                    ...headers
                },
                body: body ? JSON.stringify(body) : null
            })

            const data = await response.json();

            if(!response.ok) {
                console.error("Fetch error:", data);
                throw new Error("Fetch error: " + JSON.stringify(data))
            }

            return data;
        } catch(error) {
            console.error('Fetch error:', error)
            throw error;
        }
    }
}

export const axios = new AxiosClient()