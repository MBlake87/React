import colours from "../pokemonTypes"
export default function PokeList({ pokemon }) {


    return (
        <div className="w-[90%] xl:max-w-sm flex flex-col m-auto items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-[50%]" src={pokemon.sprites.front_default} alt="" />
            <div className="min-w-full">
                <h5 class="mb-5 text-[1.75rem] xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white first-letter:uppercase text-center">{pokemon.name}</h5>
                <div className=''>
                    <div class="mb-3 flex justify-center gap-2 font-normal text-gray-700 dark:text-gray-400">{pokemon.types.map(type => { return <p className="flex flex-row max-w-fit xl:px-5 p-2 px-4 rounded-full text-[1.25rem] xl:text-[1.2rem]" style={{ backgroundColor: colours[type.type.name] }}>{type.type.name}</p> })}</div>
                    <p class="mb-3 ml-5 font-normal text-gray-700 dark:text-gray-400 "><span className='text-[1.3rem] font-bold '>Moves:</span>{pokemon.moves.map((moves, i) => { return < p className="first-letter:uppercase"> {i < 5 && moves.move.name}</p> })}</p>
                </div>
            </div>
        </div >

    )
}
