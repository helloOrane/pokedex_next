export type Pokemon = {
    id: number;
    name: string;
    pokedex_number: number;
    hp: number;
    attack: number;
    defense: number;
    typing: string;
}

export type PokemonTable = Pokemon & {
    typing: string[];
    status:'uncaptured' | 'captured' | 'team';
}