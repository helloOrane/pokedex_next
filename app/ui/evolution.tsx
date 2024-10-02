import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchEvolutions } from "../lib/data";
import { Pokemon } from "../lib/types";
import PokemonAvatar from "./pokemonAvatar";
import Link from "next/link";


type IProps ={
    pokemon: Pokemon;
}
export default async function Evolution(props: IProps) {
    const evolutions = await fetchEvolutions(props.pokemon.name);
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl uppercase font-bold">Evolutions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
                {evolutions.length > 0 && evolutions.map((evolution) => {
                    return(
                    <div className="" key={evolution.id}>
                        <Link href={`/pokemons/${evolution.pokedex_number}`}>
                            <PokemonAvatar pokemon={evolution} />
                            <p className="text-center">{evolution.name}</p>
                        </Link>
                    </div>
                )})}
            </CardContent>
        </Card>
    );
}