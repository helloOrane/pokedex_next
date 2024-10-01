import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchEvolutions } from "../lib/data";
import { Pokemon } from "../lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type IProps ={
    pokemon: Pokemon;
}
export default async function Evolution(props: IProps) {
    const evolutions = await fetchEvolutions(props.pokemon.name);

      const types = props.pokemon.typing?.split("~") ?? [];
      const bgUrl = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Type%20Backgrounds/details_type_bg_${types[0].toLowerCase()}.png`;
      
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl uppercase font-bold">Evolutions</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
                {evolutions.length > 0 && evolutions.map((evolution) => {
                    const imgId = (evolution?.pokedex_number ?? 0) < 10 ? `00${evolution?.pokedex_number ?? 0}` : `0${evolution?.pokedex_number ?? 0}`;
                    return(
                    <div className="" key={evolution.id}>
                        <Avatar className="h-12 w-12" >
                            <AvatarImage className="h-28 w-28 p-2  border-4 border-white m-auto rounded-full bg-cover" src={`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${imgId}_00.png`} style={{backgroundImage: `url(${bgUrl})`}}/>
                            <AvatarFallback>{evolution.name}</AvatarFallback>
                        </Avatar>
                        <p className="text-center">{evolution.name}</p>
                    </div>
                )})}
            </CardContent>
        </Card>
    );
}