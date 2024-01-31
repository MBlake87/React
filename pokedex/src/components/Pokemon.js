import React from "react";
import colours from "../pokemonTypes";

const Pokemon = (props) => {
  return (
    <div className="pt-10 flex w-[100vw] h-[50vh] z-10">
      <div className="w-[85%] xl:max-w-sm flex flex-col m-auto items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full place-content-end flex">
          <button
            onClick={() => props.modal(false)}
            type="button"
            class=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 my-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Close
          </button>
        </div>
        <img
          className="rounded-t-lg w-[50%]"
          src={props.searchPokemon.sprites.front_default}
          alt=""
        />
        <div className="min-w-full">
          <h5 class="mb-5 text-[1.75rem] xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white first-letter:uppercase text-center">
            {props.searchPokemon.name}
          </h5>
          <div className="">
            <div class="mb-3 flex justify-center gap-2 font-normal text-gray-700 dark:text-gray-400">
              {props.searchPokemon.types.map((type) => {
                return (
                  <p
                    className="flex flex-row max-w-fit xl:px-5 p-2 px-4 rounded-full text-[1.25rem] xl:text-[1.2rem]"
                    style={{ backgroundColor: colours[type.type.name] }}
                  >
                    {type.type.name}
                  </p>
                );
              })}
            </div>
            <div className="flex justify-around p-5">
              <p class="mb-3 ml-5 font-normal text-gray-700 dark:text-gray-400 ">
                <span className="text-[2rem] font-bold ">Stats:</span>
                {props.searchPokemon.stats.map((stats, i) => {
                  return (
                    <p className="first-letter:uppercase">
                      {" "}
                      {i < 5 && `${stats.stat.name}: ${stats.base_stat}`}
                    </p>
                  );
                })}
              </p>
              <p class="mb-3 ml-5 font-normal text-gray-700 dark:text-gray-400 ">
                <span className="text-[2rem] font-bold ">Moves:</span>
                {props.searchPokemon.moves.map((moves, i) => {
                  return (
                    <p className="first-letter:uppercase ">
                      {" "}
                      {i < 5 && moves.move.name}
                    </p>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
