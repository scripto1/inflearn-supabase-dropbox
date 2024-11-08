"use client";

import { useQuery } from "@tanstack/react-query";
import DropBoxImage from "./DropBoxImage";
import { searchFiles } from "actions/storageActions";
import { Spinner } from "@material-tailwind/react";

export default function DropBoxImageList({ searchInput }) {
  const searchImagesQuery = useQuery({
    queryKey: ["images", searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2">
      {/* @ts-ignore */}
      {searchImagesQuery.isLoading && <Spinner />}
      {searchImagesQuery.data &&
        searchImagesQuery.data.map((image) => (
          <DropBoxImage key={image.id} image={image} />
        ))}
    </section>
  );
}
