/* eslint-disable react-hooks/exhaustive-deps */

"use client";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

function NavSearch({ path }: { path: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/${path}?${params.toString()}`);
    // replace(`/products?${params.toString()}`);
  }, 100);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);
  return (
    <Input
      type="search"
      style={{ boxShadow: "0px, 0px, 0px, 2px rgba(120, 160, 220, 0.6)" }}
      placeholder="search product... name, category, colors"
      className="py-1 flex max-w-[90%] sm:max-w-lg dark:bg-muted border-2 mx-auto text-base md:text-lg"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}
export default NavSearch;
