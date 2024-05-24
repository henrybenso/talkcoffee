import * as argon2 from "argon2";

export default async function saltAndHashPassword(str: string): Promise<string> {
    try {
        const hash = await argon2.hash(str);
        return hash;
    } catch (error) {
        console.error("Error hashing password: ", error);
        return "";
    }
}