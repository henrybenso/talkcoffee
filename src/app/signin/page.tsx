// "use client";

import Layout from "../layout";
// import Link from "next/link";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import { buttonVariants } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import LoginButton from "./loginButton";
import { signIn, providerMap } from "@/auth";
// const formSchema = z.object({
//   email: z.string(),
//   password: z.string(),
// });
import { prisma } from "@/db";

export default async function SignInPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-2">
        {Object.values(providerMap).map((provider) => (
          <form
            action={async () => {
              "use server";
              await signIn(provider.id, {redirectTo: "/"})
              // .catch((error) => {
              //   console.error("Failed to sign in", error);
              // }
              // ).then((res) => {
              //   // console.log("res: ", res);
              //   const user = prisma.user.create({
              //     data: {
              //       email: res.email,

              //     }
              //   });

              // }
              // );
            }}
          >
            <button type="submit">
              <span>Sign in with {provider.name}</span>
            </button>
          </form>
        ))}
      </div>
    </Layout>
  );
}