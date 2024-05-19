import Link from "next/link";
import Layout from "../../app/layout";
import Searchbar from "./searchbar";
import { Suspense } from "react";
import { buttonVariants } from "@/components/ui/button";
import LoginButton from "../signin/loginButton";
import Header from "./header";

export default async function Home() {
  return (
    <Layout>
      <>
        <section className="">
          <div className="">
            <Header />
          </div>
        </section>
        <section>
          <h1 className="p-5 shrink-0 flex place-content-center">
            <div className="text-5xl font-bold text-yellow-900">talkcoffee</div>
          </h1>
        </section>

        <section>
          <h2 className="">
            <div className="pr-4 pt-4 pl-4">
              <Searchbar />
            </div>
          </h2>
        </section>
      </>
    </Layout>
  );
}
