import { signIn, signOut } from "@/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function SignIn() {
  return (
    <Link href="/signin" className={buttonVariants({ variant: "outline" })}>
      Sign in
    </Link>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <Button
        variant="ghost"
        className={buttonVariants({ variant: "outline" })}
        {...props}
      >
        Sign Out
      </Button>
    </form>
  );
}
