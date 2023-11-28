import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { LngLatLike } from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGJlbnNvIiwiYSI6ImNsbDV2dTl0NjBjYzMzcnM4NTdrMDZyMTgifQ.VcDVcpA5edcvU_Ao7auekQ';

interface Store {
  name: string;
  coordinates: LngLatLike;
}

interface MapProps {
  liveLocation: LngLatLike;
}

export default function Maps({ liveLocation }: MapProps) {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/stores'); // Replace with your API endpoint
        const data = await response.json();
        setStores(data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching store data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: liveLocation,
      zoom: 12,
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

    if (!loading && stores.length > 0) {
      stores.forEach((store) => {
        new mapboxgl.Marker()
          .setLngLat(store.coordinates)
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${store.name}</h3>`))
          .addTo(map);
      });
    }

    return () => {
      map.remove();
    };
  }, [liveLocation, stores, loading]);

  return (
    <div id="map-container" style={{ height: "400px" }}>
      {loading && <p>Loading...</p>}
    </div>
  );
}
