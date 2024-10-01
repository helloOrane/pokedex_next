export type Pokemon = {
    id: number;
    name: string;
}

export type PokemonTable = {
    id: number;
    pokedex_number: number;
    name: string;
    types: string[];
    status:'uncaptured' | 'captured' | 'team';
}



// export type Type{
//     id: number;
//     name: string;
// }