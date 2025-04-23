import { z } from "zod";
import { authenticationSchema } from "../../../ui/auth-zod";

export const registerSchema = authenticationSchema.extend({
    username: z.string().min(3).max(50),
    last_name: z.string().min(3).max(50),
    first_name: z.string().min(3).max(50),
    location: z.string().max(120)
})
