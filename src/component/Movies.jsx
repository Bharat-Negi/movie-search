import React from "react";
import { useGlobalContext } from "../context/contest";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="text-center text-5xl">loading ...</div>;
  }
  return (
    <section className="my-8">
      <h2 className="text-center text-2xl mb-3.5">Movie</h2>
      <div className="grid grid-cols-4 gap-3">
        {movie.map((curMovie, id) => {
          const { imdbID, Poster, Title } = curMovie;
          const movieName = Title.substring(0, 15);
          return (
            <div
              className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs"
              key={id}
            >
              <NavLink to={`movie/${imdbID}`}>
                <img className="rounded-t-base" src={Poster} alt="" />
              </NavLink>
              <div className="p-6 text-center">
                <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
                  {movieName.length >= 15 ? `${movieName}...` : movieName}
                </h5>
                <NavLink
                  to={`movie/${imdbID}`}
                  className="inline-flex items-center bg-blue-600 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  Read more
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
