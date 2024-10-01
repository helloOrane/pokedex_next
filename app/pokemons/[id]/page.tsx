import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchEvolutions, fetchPokemonById } from "@/app/lib/data";
import { Suspense } from "react";
import Image from "next/image";
import Evolution from "@/app/ui/evolution";
import PokemonCard from "@/app/ui/pokemonCard";

export default async function Page({ params }: { params: { id: string } }) {
  const pokemon = await fetchPokemonById(parseInt(params.id));

  return (
    <>
        <div className="grid grid-cols-2">
            <Suspense fallback={<p>Loading...</p>}>
                <PokemonCard pokemon={pokemon} />
            </Suspense>
            {pokemon != null && pokemon.can_evolve && (
                <Suspense fallback={<p>Loading...</p>}>
                    <Evolution pokemon={{ ...pokemon, name: pokemon.name ?? '' }} />
                </Suspense>
            )}
        </div>


    
    </>
  );
}
