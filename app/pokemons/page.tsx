import { Suspense } from "react";
import { fetchFilteredPokemons } from "../lib/data";
import Table from "../ui/table";
import Search from "../ui/search";
import Pagination from "../ui/pagination";

export default async function Page({searchParams}:{searchParams?:{
    query?: string;
    page?: string;
}}){

    const query = searchParams?.query ?? '';
    const currentPage = Number(searchParams?.page) || 1;
    const {count, pokemons} = await fetchFilteredPokemons(query, currentPage);

    const filteredPokemons = pokemons.filter( pokemon => !(pokemon.name.includes('Mega') || pokemon.name.includes('Gmax')))

    return (
        <div>
            <h1>Pokemons</h1>
            <Search placeholder="Search Pokemon" />
            <Suspense fallback={<p>Loading....</p>}>
                <Table datas={filteredPokemons}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={count} />
            </div>
            {/* <Pagination totalPages={count} /> */}
        </div>
    );
}