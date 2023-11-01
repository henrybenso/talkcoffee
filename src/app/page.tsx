import { Metadata } from "next";
import Home from "./home/page";
import 'mapbox-gl/dist/mapbox-gl.css';

export const metadata: Metadata = {
  title: "Welcome to TalkCoffee!",
  description: "A website for finding craft coffee.",
};

export default function App() {
  return <Home />;
}
