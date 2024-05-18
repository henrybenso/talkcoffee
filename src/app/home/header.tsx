import LoginButton from "../signin/loginButton";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky flex justify-center space-x-4">
      <div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
        <LoginButton />
        <Link href="/signup" className={buttonVariants({ variant: "outline" })}>
          Sign up
        </Link>
      </div>
    </header>
  );
}
