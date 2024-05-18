import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

import { SignIn, SignOut } from "@/components/ui/auth-components";

export default async function LoginButton() {
  const session = await auth();

  if (!session?.user) return <SignIn />;
  return (
    <div>
      <text>Hi, {session.user.email}</text>
    </div>
  );
}
