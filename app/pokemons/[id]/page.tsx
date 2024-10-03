
import { fetchPokemonById } from "@/app/lib/data";
import { Suspense } from "react";
import Evolution from "@/app/ui/evolution";
import PokemonCard from "@/app/ui/pokemonCard";
import Weakness from "@/app/ui/weakness";
import TypeList from "@/app/ui/typeList";

export default async function Page({ params }: { params: { id: string } }) {
  const pokemon = await fetchPokemonById(parseInt(params.id));

  

  return (
    <>
        <div className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-2 gap-4">
            <div className="col-span-2 md:row-span-2 md:grid-rows-2">
              <Suspense fallback={<p>Loading...</p>}>
                  <PokemonCard pokemon={pokemon} />
              </Suspense>
            </div>
            <div className="col-span-2 grid grid-cols-2 md:col-span-1 md:row-span-2 md:grid md:grid-cols-1 md:gap-2">
              <div className="col-span-1">
                <Suspense fallback={<p>Loading...</p>}>
                    <TypeList pokemon={pokemon} />
                </Suspense>
              </div>
              <div className="col-span-1">
                <Suspense fallback={<p>Loading...</p>}>
                  { pokemon != null && (<Weakness pokemon={pokemon} />)}           
                </Suspense>
              </div>
            </div>
            <div className="col-span-2 md:row-span-2 md:grid-rows-2">
              {pokemon != null && Boolean(pokemon.can_evolve) && (
                  <Suspense fallback={<p>Loading...</p>}>
                      <Evolution pokemon={{ ...pokemon, name: pokemon.name ?? '' }} />
                  </Suspense>
              )}
            </div>
        </div>
        <div>
          {/* TEXT ABOUT POKEMON */}
        </div>


    
    </>
  );
}
