"use client";

import Head from "next/head";
import Layout from "../layout";
import Headerinfo from "./headerinfo";
import ImageScroller from "./imageScroller";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import createMap from "../home/maps";
import { LngLatLike } from "mapbox-gl";

enum StoreType {
  CAFE_SIT_IN = "CAFE_SIT_IN",
  CAFE_TAKE_OUT = "CAFE_TAKE_OUT",
  BAR_SIT_IN = "BAR_SIT_IN",
  NONE = "NONE",
}

export default function Page({
}: {
  store: {
    id: string;
    name: string;
    averageRating: number;
    phoneNumber: string | null;
    photos: string[];
    instagram: string | null;
    serviceTypes: { sitIn: StoreType[]; takeOut: boolean; delivery: boolean };
    serviceHours: {
      mondayOpen: string;
      mondayClose: string;
      tuesdayOpen: string;
      tuesdayClose: string;
      wednesdayOpen: string;
      wednesdayClose: string;
      thursdayOpen: string;
      thursdayClose: string;
      fridayOpen: string;
      fridayClose: string;
      saturdayOpen: string;
      saturdayClose: string;
      sundayOpen: string;
      sundayClose: string;
    };
  };
}) {
  const stores = [
    { name: 'coffee1', coordinates: [-74.0060, 40.7128] },
    { name: 'coffee2', coordinates: [-118.2437, 34.0522] },
    // Add more store locations as needed
  ];
  const liveLocation: LngLatLike = [-0.1278, 51.5074]; // Reversed order of coordinates

  // Call the createMap function to display the map
  createMap("map-container", liveLocation, stores);
  
  return (
    <Layout>
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
        <div id="map-container" style={{ height: "400px" }} />
      </>
    </Layout>
  );
}
