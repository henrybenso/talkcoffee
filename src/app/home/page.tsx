import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Layout from "../../app/layout";
import Searchbar from "./searchbar";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Hearts from "./hearts";
import StorePage from "./storePage";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    // page?: string;
  };
}) {
  const query = searchParams?.query || "";
  // const currentPage = Number(searchParams?.page) || 1;

  return (
    <Layout>
      <>
        <section className="">
          <div className="absolute top-0 right-0">
            <Link
              href="/signin"
              className={buttonVariants({ variant: "outline" })}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className={buttonVariants({ variant: "outline" })}
            >
              Sign up
            </Link>
          </div>
        </section>
        <section className="">
          <Link
            href="/stores"
            className={buttonVariants({ variant: "outline" })}
          >
            Stores
          </Link>
        </section>
        <h1 className="p-5 shrink-0 flex place-content-center">
          <div className="text-5xl font-bold text-yellow-900">TalkCoffee</div>
        </h1>
        <h2 className="p-4">
          <Searchbar />
        </h2>
        <Suspense key={query} fallback={<Hearts />}>
          {/* <StorePage query={query} /> */}
        </Suspense>
      </>
    </Layout>
  );
}
