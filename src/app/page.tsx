"use client";
import Home from "./home/page";
import React, { useEffect, useState } from "react"; // Import React

export default function App() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome to TalkCoffee!</h1>
        <p className="text-gray-600 text-center">A website for finding craft coffee.</p>
        <Home />
      </div>
    </div>
  );
}
