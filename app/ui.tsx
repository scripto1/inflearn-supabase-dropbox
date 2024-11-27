"use client";

import DragnDropZone from "components/DragnDropZone";
import DropBoxImageList from "components/DropBoxImageList";
import Logo from "components/Logo";
import SearchComponent from "components/SearchComponent";
import { useState } from "react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <main className="flex flex-col w-2/3 m-auto items-center p-5 gap-4">
      <Logo />
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <DragnDropZone />
      <DropBoxImageList searchInput={searchInput} />
    </main>
  );
}
