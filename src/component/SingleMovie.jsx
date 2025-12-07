import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "../context/contest";

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 1000);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return <div className="text-center text-3xl mt-28">loading ...</div>;
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div class="bg-white border border-gray-200 rounded-xl shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div class="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
            <img
              class="size-full absolute top-0 start-0 object-cover"
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
          <div class="flex flex-wrap">
            <div class="p-4 flex flex-col h-full sm:p-7 relative">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                {movie.Title}
              </h3>
              <p class="mt-1 text-gray-500 dark:text-neutral-400">
                {movie.Plot}
              </p>
              <NavLink
                to="/"
                className="bg-blue-500 font-medium text-white rounded-xl p-2 w-32 text-center hover:bg-blue-700 absolute bottom-4 left-4"
              >
                Go Back
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
