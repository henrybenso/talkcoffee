import LoginButton from "../signin/loginButton";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Header() {
  return (
    // <div className="sticky flex space-x-4">
    // <div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
    //   </div>
    //   </div>
    <header>
      <div className="justify-between sticky flex space-x-4">
        <div className="flex items-center h-16 max-w-3xl px-4 sm:px-6">
          <Link
            href="/store/create"
            className={buttonVariants({ variant: "outline" })}
          >
            Add a Store
          </Link>
        </div>
        <div className="flex items-center h-16 max-w-3xl px-4 sm:px-6">
          <LoginButton />
        </div>
        <div className="flex items-center h-16 max-w-3xl px-4 sm:px-6">
          <Link
            href="/signup"
            className={buttonVariants({ variant: "outline" })}
          >
            Temp Sign up
          </Link>
        </div>
      </div>
      {/* <Link href="/signup" className={buttonVariants({ variant: "outline" })}>
          Sign up
        </Link> */}
    </header>
  );
}
