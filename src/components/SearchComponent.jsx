import React, { useContext } from "react";
import { FlagContext } from "../context/FlagContext";

export default function SearchComponent() {
  const { setKeyword, handleSearch, keyword, isSearch, clearSearch } =
    useContext(FlagContext);
  return (
    <div className="flex gap-3 w-4/5">
      <input
        type="text"
        placeholder="Search Your Country"
        className="p-3.5 w-full"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {isSearch ? (
        <button className="p-3.5 bg-green-300" onClick={clearSearch}>
          Clear
        </button>
      ) : (
        <button
          className="p-3.5 bg-green-300"
          disabled={keyword ? false : true}
          onClick={handleSearch}
        >
          Search
        </button>
      )}
    </div>
  );
}
