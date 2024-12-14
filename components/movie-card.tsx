"use client";

import Link from "next/link";
export default function MovieCard({ movie }) {
  return (
    <li className="col-span-1 relative">
      {/* Image 부분  */}
      <img src={movie.image_url} className="w-full rounded-lg" />
      <Link href={`/movies/${movie.id}`}>
        <div className="absolute flex items-center justify-center rounded-lg inset-0 z-10 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300">
          <p className="text-base font-bold text-white">{movie.title}</p>
        </div>
      </Link>
    </li>
  );
}
