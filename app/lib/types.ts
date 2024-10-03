export type PokemonTable = {
    id: number;
    pokedex_number: number;
    name: string;
    typing: string[];
    genus: string;
    status:'uncaptured' | 'captured' | 'team';
}