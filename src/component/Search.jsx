import React from "react";
import { useGlobalContext } from "../context/contest";

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext();

  return (
    <div className="my-5">
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="website-admin"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Search by movie name
        </label>
        <div className="flex shadow-xs rounded-base">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-none rounded-e-base block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand placeholder:text-body"
            placeholder="Search"
          />
        </div>
      </form>
      <div className="text-red-600 text-center">
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  );
};

export default Search;
