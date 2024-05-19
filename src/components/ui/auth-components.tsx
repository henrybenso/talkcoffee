import { signIn, signOut } from "@/auth";
import { Button, buttonVariants } from "@/components/ui/button";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button
        variant="ghost"
        className={buttonVariants({ variant: "outline" })}
        {...props}
      >
        Sign In
      </Button>
    </form>
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
