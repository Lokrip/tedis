import { axios } from "@/entities/axios";
import { RegisterFormData } from "@/types/app/auth.types";

export async function createUser(body: RegisterFormData) {
    try {
        const data = axios.post("/api/v1/auth/", body);
        return data;
    } catch(error) {
        console.error(error)
        throw error
    }
}
