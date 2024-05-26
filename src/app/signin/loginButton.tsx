import { auth } from "@/auth";
import { SignIn, SignOut } from "@/components/ui/auth-components";

export default async function LoginButton() {
  const session = await auth();

  // if (!session?.user) {
  //   return <SignIn />;
  // } else {
  //   const users = await prisma.user.findMany({
  //     // where: {
  //     //   // email: session.user.email,
  //     // },
  //     select: {
  //       avatar: true,
  //     },
  //   });

  //   // const thereturn = users[0].avatar as string;
  //   return (
  //     // ! User's avatar here
  //     // <div>
  //     //   <text>Hi, {session.user.name}</text>
  //     // </div>
  //     <div>
  //       {/* <Link href="/account">
  //         <img src={thereturn} alt="Avatar" />
  //       </Link> */}
  //       <SignOut />
  //     </div>
  //   );
  // }

  if (!session?.user) return <SignIn />;
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
