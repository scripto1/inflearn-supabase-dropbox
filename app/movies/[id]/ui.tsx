"use client";

export default function UI({ movie }) {
  return (
    <section className="flex flex-col md:flex-row items-center">
      <img src={movie.image_url} className="w-3/12 rounded-lg" />
      <div className="md:w-2/3 w-full items-center md:items-start flex flex-col p-6 gap-4">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-lg font-medium">{movie.overview}</p>
        <div className="font-bold text-lg">
          <i className="fas fa-star mr-1" />
          Vote Average: {movie.vote_average}
        </div>
        <div className="font-bold text-lg">Popularity: {movie.popularity}</div>
        <div className="font-bold text-lg">
          Release Date: {movie.release_date}
        </div>
      </div>
    </section>
  );
}
