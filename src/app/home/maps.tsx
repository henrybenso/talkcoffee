import React, { useEffect, useState } from "react";
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  liveLocation: LngLatLike;
  stores: { name: string; coordinates: LngLatLike }[];
}

const Map: React.FC<MapProps> = ({ liveLocation, stores }) => {
  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiZWRkeTI4MDUiLCJhIjoiY2xuZjZ6MW5oMGp4YjJpdXBydGN4ZGRxayJ9.LIn7u8rJrHlpboKiZQuEhw";

    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: liveLocation,
      zoom: 12,
    });

    if (stores) {
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
  }, [liveLocation, stores]);

  return <div id="map-container" style={{ height: "400px" }} />;
};

export default Map;