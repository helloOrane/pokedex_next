import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pokemon } from "@prisma/client";
import PokemonAvatar from "./pokemonAvatar";

type IProps ={
    pokemon: pokemon;
}
export default function PokemonCard(props: IProps) {
    const types = props.pokemon.typing?.split("~") ?? [];
    const bgUrl = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Type%20Backgrounds/details_type_bg_${types[0].toLowerCase()}.png`;

    return (
        <Card
        className="bg-cover"
        style={{
        backgroundImage: `url(${bgUrl})`,
        }}
    >
        <CardHeader className="">
            <PokemonAvatar pokemon={props.pokemon} />
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
        </CardContent>
    </Card>
    )
};