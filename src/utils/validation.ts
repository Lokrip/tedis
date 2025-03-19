import { z } from "zod";

export class Validation implements IValidation {
    isEmpty(value: string): boolean {
        throw new Error("Method not implemented.");
    }
    isNumber(value: string): boolean {
        throw new Error("Method not implemented.");
    }
    hasMinLength(value: string, minLength: number): boolean {
        throw new Error("Method not implemented.");
    }
    hasMaxLength(value: string, maxLength: number): boolean {
        throw new Error("Method not implemented.");
    }
    matchesPattern(value: string, pattern: RegExp): boolean {
        throw new Error("Method not implemented.");
    }
}

export class EmailValidation extends Validation implements IEmailValidation {
    isEmail(email: string): boolean {
        throw new Error("Method not implemented.");
    }
}

export const authenticationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(110),
});
