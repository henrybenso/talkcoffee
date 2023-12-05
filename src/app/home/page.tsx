import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Layout from "../../app/layout";
import Searchbar from "./searchbar";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Results from "./result";
import MapContainer from "./mapContainer";
// import Maps from "./maps";

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
  // const [userLocation, setUserLocation] = useState<[number, number]>([0, 0]);

  // const getUserLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setUserLocation([latitude, longitude]);
  //       },
  //       (error) => {
  //         console.error("Error getting user location:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser");
  //   }
  // };

  return (
    <Layout>
      <>
        <section className="">
          {/* <div className="absolute top-0 right-0">
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
          </div> */}
        </section>
        <section className="">
          {/* <Link
            href="/store"
            className={buttonVariants({ variant: "outline" })}
          >
            Stores
          </Link> */}
        </section>
        <h1 className="p-5 shrink-0 flex place-content-center">
          <div className="text-5xl font-bold text-yellow-900">TalkCoffee</div>
        </h1>
        <h2 className="">
          <div className="pr-4 pt-4 pl-4">
            <Searchbar />
          </div>
          <div className="pr-4 pb-4 pl-4">
            {/* <Suspense key={query} fallback={<Hearts />}>
              <Suggestions query={query} />
            </Suspense> */}
            {/* <Results params={query, } /> */}
          </div>
          <div>
            <MapContainer />
          </div>
          <div>
            {/* <button onClick={getUserLocation}>Get user location</button> */}
          </div>
        </h2>
      </>
    </Layout>
  );
}
