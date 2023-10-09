import React, { useEffect } from "react";
import mapboxgl, { LngLatLike } from 'mapbox-gl';

interface MapProps {
  liveLocation: LngLatLike;
  stores: { name: string; coordinates: [number, number] }[];
}

const Map: React.FC<MapProps> = ({ liveLocation, stores }) => {
  useEffect(() => {
    mapboxgl.accessToken = "sk.eyJ1IjoiZWRkeTI4MDUiLCJhIjoiY2xuZjc4bjRwMGpjeTJwdXBsMTlkZ2lqcyJ9.JK8S-46J09If1cbr8RDPkA"; 

    const map = new mapboxgl.Map({
      container: "map-container", 
      style: "mapbox://styles/mapbox/streets-v11", 
      center: liveLocation,
      zoom: 12,
    });

    // Add markers for store locations
    stores.forEach((store) => {
      new mapboxgl.Marker()
        .setLngLat(store.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${store.name}</h3>`))
        .addTo(map);
    });

    return () => {
      map.remove(); 
    };
  }, [liveLocation, stores]);

  return <div id="map-container" style={{ height: "400px" }} />;
};

export default Map;
