import { pokemon } from "@prisma/client";

// export type Pokemon = {
//     id: number;
//     name: string;
//     pokedex_number: number;
//     hp: number;
//     attack: number;
//     defense: number;
//     typing: string;
// }

export type PokemonTable = {
    id: number;
    pokedex_number: number;
    name: string;
    typing: string[];
    genus: string;
    status:'uncaptured' | 'captured' | 'team';
}