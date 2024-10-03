'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";

type IProps = {
    pokedex_number: number;
    name: string;
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
            const imgId = props.pokedex_number  < 10
            ? `00${props.pokedex_number ?? "0"}`
            : props.pokedex_number > 99? `${props.pokedex_number}` :`0${(props.pokedex_number)}`;

        const urlType = props.name.includes('Mega')?'_51': props.name.includes('Gmax')? '_52':'_00';
        const primaryUrl = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${imgId}${urlType}.png`;
        const fallbackUrl = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${imgId}_00.png`;

        const isImgExists = await checkImageExists(primaryUrl);
        
        setUrl(isImgExists? primaryUrl : fallbackUrl);
    }   
    fetchImageUrl();
},[])


    return (
        <Avatar className="h-36 w-36 border-4 p-2 rounded-full border-white m-auto flex items-center justify-center">
            <AvatarImage src={url} className="max-h-full max-w-full  p-2  m-auto "/>
            <AvatarFallback>no image</AvatarFallback>
        </Avatar>
    )
}