import React, { useState } from "react";

const Search = ({ searchPokemon }) => {
  const [search, setSearch] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    searchPokemon(search);
  };
  return (
    <div className="pt-5 flex justify-center">
      <form
        className="xl:w-[50%] flex justify-center"
        onSubmit={(e) => e.preventDefault}
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="w-[50%] rounded-md pl-3"
          type="text"
          placeholder="Search..."
        />
        <button
          onClick={handleClick}
          className="bg-yellow-400 px-5 ml-5 rounded-md xl:text-xl border-black border "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
