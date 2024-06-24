import { signIn, signOut } from "@/auth";
import Button from '@/components/ui/button';
import Link from 'next/link';

export function SignIn() {
  return <Link href="/signin">Sign in</Link>;
}

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
      className="w-full"
    >
      <Button>Sign Out</Button>
    </form>
  );
}
