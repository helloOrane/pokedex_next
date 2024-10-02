import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pokemon } from "@prisma/client";
import Image from "next/image";

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
                <CardTitle className="uppercase font-bold text-xl">Types </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4 mb-4">
                {types.map((type: string, index) => (
                <div className="w-12 h-12" key={type}>
                    <Image
                        src={typeImgUrls[index]}
                        alt={type}
                        width={48}
                        height={48}
                        className="h-12 w-12"
                    />
                    <p className="text-center">{type}</p>
                </div>
                ))}
            </CardContent>

        </Card>
    )
}