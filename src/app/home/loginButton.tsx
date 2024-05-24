import { prisma } from "../../../db";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

import { SignIn, SignOut } from "@/components/ui/auth-components";
import Link from "next/link";

export default async function LoginButton() {
  const session = await auth();

  if (!session?.user) return <SignIn />;
  // } else {
  //   const users = await prisma.user.findMany({
  //     // where: {
  //     //   // email: session.user.email,
  //     // },
  //     select: {
  //       avatar: true,
  //     },
  //   });

  // const thereturn = users[0].avatar as string;
  return (
    // ! User's avatar here
    // <div>
    //   <text>Hi, {session.user.name}</text>
    // </div>
    <div>
      {/* <Link href="/account">
          <img src={thereturn} alt="Avatar" />
        </Link> */}
      <SignOut />
    </div>
  );
}
