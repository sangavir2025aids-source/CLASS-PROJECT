import z from "zod";

export const registerschema = z.object({
    name: z.string().min(3, "Name must contain 3 letters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password should be minimum of 8"),
    age: z.coerce.number().min(18, "Age should be minimum of 18"),
})