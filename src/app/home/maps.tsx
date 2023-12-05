"use client";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGJlbnNvIiwiYSI6ImNsbDV2dTl0NjBjYzMzcnM4NTdrMDZyMTgifQ.VcDVcpA5edcvU_Ao7auekQ";

// interface Store {
//   name: string;
//   coordinates: LngLatLike;
// }

// interface MapProps {
//   liveLocation: LngLatLike;
// }

export default function Maps() {
  // const [stores, setStores] = useState<Store[]>([]);
  // const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<{}>({});

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     const { latitude, longitude } = position.coords;
  //     setUserLocation({ latitude, longitude });
  //   });
  // }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      });
    }

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-24, 42],
      zoom: 1,
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    // if (!loading && stores.length > 0) {
    //   stores.forEach((store) => {
    //     new mapboxgl.Marker()
    //       .setLngLat(store.coordinates)
    //       .setPopup(new mapboxgl.Popup().setHTML(`<h3>${store.name}</h3>`))
    //       .addTo(map);
    //   });
    // }
  }, [userLocation]);
  return <div className="h-2/6 w-screen" id="map"></div>;
}
