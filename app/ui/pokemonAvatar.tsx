'use client';

import { pokemon } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";

type IProps = {
    pokemon: pokemon;
}

export default function PokemonAvatar(props: IProps) {
    const [ url, setUrl] = useState<string>('');

    const checkImageExists = async (url: string) => {
        try{
            const response = await fetch(url);
            return response.ok;
        }catch(error){
            return false
        }
      }

useEffect(() => {
    const fetchImageUrl = async()=>{
            const imgId = props.pokemon.pokedex_number  < 10
            ? `00${props.pokemon.pokedex_number ?? "0"}`
            : props.pokemon.pokedex_number > 99? `${props.pokemon.pokedex_number}` :`0${(props.pokemon.pokedex_number)}`;

        const urlType = props.pokemon.name.includes('Mega')?'_51': props.pokemon.name.includes('Gmax')? '_52':'_00';
        const primaryUrl = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${imgId}${urlType}.png`;
        const fallbackUrl = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${imgId}_00.png`;

        const isImgExists = await checkImageExists(primaryUrl);
        
        setUrl(isImgExists? primaryUrl : fallbackUrl);
    }   
    fetchImageUrl();
},[])


    return (
        <Avatar className="h-36 w-36 border-4 p-2 rounded-full border-white m-auto flex items-center justify-center">
            <AvatarImage src={url} />
            <AvatarFallback>no image</AvatarFallback>
        </Avatar>
    )
}