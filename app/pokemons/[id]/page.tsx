
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
        <div className="flex flex-col gap-4 lg:flex-row">
            <div className="lg:w-1/2 flex flex-col gap-4">
              <div className="">
                <Suspense fallback={<p>Loading...</p>}>
                    <PokemonCard pokemon={pokemon} />
                </Suspense>
              </div>
              <div className="flex flex-row gap-4">
                <div className="grow">
                  <Suspense fallback={<p>Loading...</p>}>
                      <TypeList pokemon={pokemon} />
                  </Suspense>
                </div>
                <div className="grow">
                  <Suspense fallback={<p>Loading...</p>}>
                    { pokemon != null && (<Weakness pokemon={pokemon} />)}           
                  </Suspense>
                </div>
              </div>

            </div>
            <div className="flex gap-4 lg:1/2">
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
