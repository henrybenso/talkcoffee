import Link from "next/link";
import Searchbar from './searchbar';
import { Suspense } from 'react';
import Header from './header';
import Button from '@/components/ui/button';
import LoginButton from '../signin/loginButton';

export default async function Home() {
  return (
    <>
      <section className="">
        <div className="">
          <Header>
            <Button>
              <Link href="/store/create">Add a Store</Link>
            </Button>
            {/* <div className="flex items-center h-16 max-w-3xl px-4 sm:px-6">
                <LoginButton />
              </div> */}
            <Button>
              <Link href="/signup">Temp Sign up</Link>
            </Button>
          </Header>
        </div>
      </section>
      <section>
        <h1 className="p-5 shrink-0 flex place-content-center">
          <div className="text-5xl font-bold text-yellow-900">talkcoffee</div>
        </h1>
      </section>

      <section>
        <h2 className="">
          <div className="pr-4 pt-4 pl-4">{/* <Searchbar /> */}</div>
        </h2>
      </section>
    </>
  );
}
