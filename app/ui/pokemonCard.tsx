import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pokemon } from "@prisma/client";
import PokemonAvatar from "./pokemonAvatar";
import { Separator } from "@/components/ui/separator"

type IProps ={
    pokemon: pokemon;
}
export default function PokemonCard(props: IProps) {
    const types = props.pokemon.typing?.split("~") ?? [];
    const bgUrl = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Type%20Backgrounds/details_type_bg_${types[0].toLowerCase()}.png`;

    return (
        <Card
        className="bg-cover flex lg:flex-direction-row
        "
        style={{
        backgroundImage: `url(${bgUrl})`,
        }}
    >
        <CardHeader className="grow">
            <PokemonAvatar name={props.pokemon.name} pokedex_number={props.pokemon.pokedex_number} />
            <CardTitle className="text-center text-lg uppercase">{props.pokemon.name}</CardTitle>
        </CardHeader>
        <CardContent className="bg-white pt-2">
        <div className="grid grid-cols-2 gap-4">
            <h3 className=" font-bold">Hp</h3>
            <p>{props.pokemon.hp}</p>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
            <h3 className=" font-bold">Attack</h3>
            <p>{props.pokemon.attack}</p>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
            <h3 className=" font-bold">Defense</h3>
            <p>{props.pokemon.defense}</p>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
            <h3 className=" font-bold">Special attack</h3>
            <p>{props.pokemon.special_attack}</p>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
            <h3 className=" font-bold">Special defense</h3>
            <p>{props.pokemon.special_defense}</p>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
            <h3 className=" font-bold">Speed</h3>
            <p>{props.pokemon.speed}</p>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
            <h3 className=" font-bold">Height</h3>
            <p>{props.pokemon.height}</p>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
            <h3 className=" font-bold">Weight</h3>
            <p>{props.pokemon.weight}</p>
        </div>
        </CardContent>
    </Card>
    )
};