
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { pokemon } from "@prisma/client";
import Image from "next/image";
import TypeIcon from "./typeIcon";


type IProps = {
    pokemon: pokemon;
}

export default function Weakness(props:IProps){

    const weaknessList: string[] = [];
    for (const [key, value] of Object.entries(props.pokemon)) {

        if(key === 'bug_attack_effectiveness' && value === 2){
            weaknessList.push('Bug');
        }
        if(key === 'dark_attack_effectiveness' && value === 2){
            weaknessList.push('Dark');
        }
        if(key === 'dragon_attack_effectiveness' && value === 2){
            weaknessList.push('Dragon');
        }
        if(key === 'electric_attack_effectiveness' && value === 2){
            weaknessList.push('Electric');
        }
        if(key === 'fairy_attack_effectiveness' && value === 2){
            weaknessList.push('Fairy');
        }
        if(key === 'fighting_attack_effectiveness' && value === 2){
            weaknessList.push('Fighting');
        }
        if(key === 'fire_attack_effectiveness' && value === 2){
            weaknessList.push('Fire');
        }
        if(key === 'fly_attack_effectiveness' && value === 2){
            weaknessList.push('Fly');
        }
        if(key === 'ghost_attack_effectiveness' && value === 2){
            weaknessList.push('Ghost');
        }
        if(key === 'grass_attack_effectiveness' && value === 2){
            weaknessList.push('Grass');
        }
        if(key === 'ground_attack_effectiveness' && value === 2){
            weaknessList.push('Ground');
        }
        if(key === 'ice_attack_effectiveness' && value === 2){
            weaknessList.push('Ice');
        }
        if(key === 'normal_attack_effectiveness' && value === 2){
            weaknessList.push('Normal');
        }
        if(key === 'poison_attack_effectiveness' && value === 2){
            weaknessList.push('Poison');
        }
        if(key === 'psychic_attack_effectiveness' && value === 2){
            weaknessList.push('Psychic');
        }
        if(key === 'rock_attack_effectiveness' && value === 2){
            weaknessList.push('Rock');
        }
        if(key === 'steel_attack_effectiveness' && value === 2){
            weaknessList.push('Steel');
        }
        if(key === 'water_attack_effectiveness' && value === 2){
            weaknessList.push('Water');
        }
    }
    

    return(
        <Card>
            <CardHeader>
                <CardTitle className="text-lg uppercase font-bold">Faiblesses</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2 mb-4">
                {weaknessList.map((weakness: string, index) => (
                    <TypeIcon key={index} type={weakness} />
                ))}
            </CardContent>
        </Card>
    )
}