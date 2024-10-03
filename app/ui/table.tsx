import Link from "next/link";
import { PokemonTable } from "../lib/types";
import Image from "next/image";

type IProps = {
    datas: PokemonTable[];
}
export default function Table(props: IProps) {
  
    return (
        <table className="hidden min-w-full text-gray-900 md:table">
          <thead className="rounded-lg text-left text-sm font-bold">
            <tr>
              <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                Number
              </th>
              <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                Image
              </th>
              <th scope="col" className="px-4 py-5 font-bold">
                  Name
              </th>
              <th scope="col" className="px-4 py-5 font-bold">
                  Types
              </th>      
              <th scope="col" className="px-4 py-5 font-bold">
                Status
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Details</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {props.datas.map((pokemon:PokemonTable) => {
              console.log(pokemon);
              const imgId = pokemon.pokedex_number < 10 ? `00${pokemon.pokedex_number}` : `0${pokemon.pokedex_number}`;
              
              return (
              <tr
                key={pokemon.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <p>{pokemon.pokedex_number}</p>
                  </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${imgId}_00.png` ?? 'https://via.placeholder.com/50'}
                      className="rounded-full"
                      width={50}
                      height={50}
                      alt={`${pokemon.name}'s profile picture`}
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {pokemon.name}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {pokemon.types.map((type:string) => (<p key={type}>{type}</p>))}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{pokemon.status}</p>
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <Link href={`/pokemons/${pokemon.pokedex_number}`} className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">See details</Link>
                  </div>
                </td>
              </tr>
            )})}
          </tbody>
      </table>    

    )
}