export type Pokemon = {
    id: number;
    name: string;
}

export type PokemonTable = {
    id: number;
    name: string;
    types: string[];
    status:'uncaptured' | 'captured' | 'team';
}



// export type Type{
//     id: number;
//     name: string;
// }