import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
// import { Pokemon } from "../lib/types";
import { pokemon } from "@prisma/client";

type IProps ={
    pokemon: pokemon;
}
export default function PokemonCard(props: IProps) {

    const types = props.pokemon.typing?.split("~") ?? [];
  const bgUrl = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Type%20Backgrounds/details_type_bg_${types[0].toLowerCase()}.png`;
  const imgId =
    (props.pokemon.pokedex_number ?? 0) < 10
      ? `00${props.pokemon.pokedex_number ?? "0"}`
      : `0${props.pokemon.pokedex_number ?? "0"}`;
  const pokemonImgUrl = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${imgId}_00.png`;
  const typeImgUrls = types.map(
    (type: string) =>
      `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Types/POKEMON_TYPE_${type.toUpperCase()}_BORDERED.png`
  );
    return (
        <Card
        className="bg-cover w-1/2 md:w-1/3 @lg:w-1/4 "
        style={{
        backgroundImage: `url(${bgUrl})`,
        }}
    >
        <CardHeader className="">
            <Avatar className="h-36 w-36 border-4 p-2 rounded-full border-white m-auto">
                <AvatarImage src={pokemonImgUrl} />
                <AvatarFallback>{props.pokemon.name}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-center text-xl uppercase">{props.pokemon.name}</CardTitle>
        </CardHeader>
        <CardContent className="bg-white pt-2">
        <div className="grid grid-cols-2 gap-4">
            <h3 className="uppercase font-bold text-right">Hp</h3>
            <p>{props.pokemon.hp}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <h3 className="uppercase font-bold text-right">Attack</h3>
            <p>{props.pokemon.attack}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <h3 className="uppercase font-bold text-right">Defense</h3>
            <p>{props.pokemon.defense}</p>
        </div>
        <div className="grid grid-cols-2 grid-flow-dense gap-4">
            <h3 className="uppercase font-bold text-right">Types </h3>
            <div className="flex gap-4">
                {types.map((type: string, index) => (
                <div className="" key={type}>
                    <Image
                    src={typeImgUrls[index]}
                    width={50}
                    height={50}
                    alt={type}
                    />
                    <p className="text-center">{type}</p>
                </div>
                ))}
            </div>
        </div>
        </CardContent>
    </Card>
    )
};