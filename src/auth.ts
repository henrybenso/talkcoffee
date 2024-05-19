import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import saltAndHashPassword from "@/utils/hash"

async function getUser(params: { email: string, passHash: string }): Promise<any> {
    const res = await fetch(`http://localhost:3000/api/user?email=${email}&passHash=${passHash}`, {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });

    if (res.ok) {
        try {
            const data = await res.json();
            return data;
            // Handle the successful response here, e.g., redirect to a new page
        } catch (error) {
            console.error("Error parsing JSON response:", error);
            // Handle the case where the JSON response cannot be parsed
        }
    } else {
        console.error("Request was not successful. Status code:", res.status);
        // Handle the case where the request was not successful (e.g., show an error message)
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Credentials({
        credentials: {
            email: {},
            // username: {},
            password: {},

        }, authorize: async (credentials) => {
            let user = null;

            const pwHash = await saltAndHashPassword(credentials.password as string);

            user = await getUser({ email: credentials.email as string, passHash: pwHash });

            if (!user) {
                throw new Error("No user found");
            }

            return user;
        }
    }), Google],
})