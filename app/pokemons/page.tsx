import { Suspense } from "react";
import { fetchFilteredPokemons } from "../lib/data";
import Table from "../ui/table";
import Search from "../ui/search";

export default async function Page({searchParams}:{searchParams?:{
    query?: string;
    page?: string;
}}){

    const query = searchParams?.query ?? '';
    const currentPage = Number(searchParams?.page) || 1;
    console.log('current page', currentPage); // Vérifier les paramètres dans les logs
    const pokemons = await fetchFilteredPokemons(query, currentPage);
    const filteredPokemons = pokemons.filter( pokemon => !(pokemon.name.includes('Mega') || pokemon.name.includes('Gmax')))


    return (
        <div>
        <h1>Pokemons</h1>
        <Search placeholder="Search Pokemon" />
        <Suspense fallback={<p>Loading....</p>}>
            <Table datas={filteredPokemons} />
        </Suspense>
        </div>
    );
}