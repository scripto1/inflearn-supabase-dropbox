import { Trash } from "@phosphor-icons/react";
import { getImageUrl } from "utils/supabase/storage";

export default function DropBoxImage({ image }) {
  return (
    <figure className="relative w-full flex flex-col border border-gray-200 rounded-lg shadow-lg p-3 gap-2">
      <Trash
        size={32}
        color="white"
        className="absolute bg-blue-gray-400 rounded-md top-5 right-5 p-1 cursor-pointer"
      />
      <picture>
        <img
          src={getImageUrl(image.name)}
          className="w-full rounded-lg aspect-square object-cover"
        />
      </picture>
      <figcaption>{image.name}</figcaption>
    </figure>
  );
}
