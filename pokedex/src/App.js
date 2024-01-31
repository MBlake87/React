import { useState, useEffect } from "react";
import {
  getPokemon,
  getEachPokemon,
  getSearchPokemon,
} from "./requests/pokemon";
import PokeCard from "./components/PokeCard";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Pokemon from "./components/Pokemon";

function App() {
  //Setting up state to handle pokemon list, the next and previous pages and the loading between requests.
  const [pokemon, setPokemon] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState();
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  //on load fetch all pokemon from api, sets next/previous states to the next/previous url in data and sets loading to false
  useEffect(() => {
    async function fetchPokemon() {
      let response = await getPokemon(initialUrl);
      setNextPage(response.next);
      setPrevPage(response.previous);
      await eachPokemon(response.results);
      setLoading(false);
    }
    fetchPokemon();
  }, []);

  //to request each pokemon - takes the response data from first api call, maps over the array to create new array with individual pokemon
  const eachPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonData = await getEachPokemon(pokemon.url);
        return pokemonData;
      })
    );
    setPokemon(_pokemonData);
  };

  const next = async () => {
    setLoading(true);
    let data = await getPokemon(nextPage);
    await eachPokemon(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevPage) return;
    setLoading(true);
    let data = await getPokemon(prevPage);
    await eachPokemon(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  };

  const searchPokemon = async (query) => {
    const response = await getSearchPokemon(initialUrl, query);
    setSearched(response);
    setModalOpen(true);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-[#FF0303] w-[100vw] min-h-screen">
      {loading ? (
        <h1 className="text-[4rem]">Loading....</h1>
      ) : (
        <>
          <Banner />

          <Search searchPokemon={searchPokemon} />
          {modalOpen && !loading ? (
            <Pokemon
              modal={(modal) => setModalOpen(modal)}
              searchPokemon={searched}
            ></Pokemon>
          ) : (
            <>
              <div className="flex justify-around my-10">
                <button
                  className="xl:text-[1.5rem] min-w-[100px] bg-yellow-400 px-5 border-black border-2 py-3 rounded-full hover:underline"
                  onClick={prev}
                >
                  Previous
                </button>
                <button
                  className="xl:text-[1.5rem] min-w-[100px] bg-yellow-400 px-5 py-3 border-black border-2 rounded-full hover:underline"
                  onClick={next}
                >
                  Next
                </button>
              </div>
              <div className="grid gap-3 xl:p-[2rem] xl:gap-y-5 xl:grid-cols-4">
                {pokemon.map((pokemon, i) => {
                  return <PokeCard key={i} pokemon={pokemon} />;
                })}
              </div>
              <div className="flex justify-around my-10 pb-10">
                <button
                  className="xl:text-[1.5rem] min-w-[100px] bg-yellow-400 px-5 border-black border-2 py-3 rounded-full hover:underline"
                  onClick={prev}
                >
                  Previous
                </button>
                <button
                  className="xl:text-[1.5rem] min-w-[100px] bg-yellow-400 px-5 py-3 border-black border-2 rounded-full hover:underline"
                  onClick={next}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
