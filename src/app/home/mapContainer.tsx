"use client";

import Head from "next/head";
import Headerinfo from "./headerinfo";
import ImageScroller from "./imageScroller";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Map from "../home/maps";
import { LngLatLike } from "mapbox-gl";

enum StoreType {
  CAFE_SIT_IN = "CAFE_SIT_IN",
  CAFE_TAKE_OUT = "CAFE_TAKE_OUT",
  BAR_SIT_IN = "BAR_SIT_IN",
  NONE = "NONE",
}

export default function Page() {
  const stores = [
    { name: "coffee1", coordinates: [-74.006, 40.7128] },
    { name: "coffee2", coordinates: [-118.2437, 34.0522] },
    // Add more store locations as needed
  ];

  const liveLocation: LngLatLike = [-74.006, 40.7128]; // New York City

  return (
    <>
      <div>
        <Link
          href="/stores/create"
          className={buttonVariants({ variant: "outline" })}
        >
          Add a store
        </Link>
      </div>
      <div>Google Rating:</div>
      <div>Talk Coffee Rating:</div>
      <div id="map-container" style={{ height: "400px" }}>
        <Map liveLocation={liveLocation} stores={stores} /> {}
      </div>
    </>
  );
}
