import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pokemon } from "@prisma/client";
import Image from "next/image";
import TypeIcon from "./typeIcon";

type IProps ={
    pokemon: pokemon;
}
export default function TypeList(props:IProps){
    const types = props.pokemon.typing?.split("~") ?? [];
    const typeImgUrls = types.map(
        (type: string) =>
          `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Types/POKEMON_TYPE_${type.toUpperCase()}_BORDERED.png`
      );

    return (
        <Card>
            <CardHeader>
                <CardTitle className="uppercase font-bold text-lg">Types </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2 mb-4">
                {types.map((type: string, index) => (
                    <TypeIcon type={type} key={index}/>
                ))}
            </CardContent>

        </Card>
    )
}