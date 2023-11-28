"use client";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Search() {
  // const [stores, setStores] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    // setSearchTerm(event.target.value);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
      const stores = fetchStores(term);
      setShowSuggestions(true);
    } else {
      params.delete("query");
      setShowSuggestions(false);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const [storeState, setStoresState] = useState([]);
  async function fetchStores(query: string) {
    const res = await fetch(`http://localhost:3000/api/search?query=${query}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    // console.log(data);
    setStoresState(data);
  }

  return (
    <div>
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search"
          name="search"
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder="Search..."
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <Button type="submit">Search</Button>
      </div>

      <div>
        {showSuggestions && (
          <ul className="w-full">
            {Object.keys(storeState).map((store) => (
              <li
                key={storeState[store].id}
                className="text-sm pl-10 p-3 border black-black"
              >
                {storeState[store].name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
