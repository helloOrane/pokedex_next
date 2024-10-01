import { PokemonTable } from "../lib/types";
import Image from "next/image";

type IProps = {
    datas: PokemonTable[];
}
export default function Table(props: IProps) {

    return (
        <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Id
            </th>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Image
            </th>
            <th scope="col" className="px-4 py-5 font-medium">
                Name
            </th>
            <th scope="col" className="px-4 py-5 font-medium">
                Types
            </th>      
            <th scope="col" className="px-4 py-5 font-medium">
              Status
            </th>
            <th scope="col" className="relative py-3 pl-6 pr-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {props.datas.map((pokemon:PokemonTable, index) => {
            const imgId = pokemon.id < 10 ? `00${pokemon.id}` : `0${pokemon.id}`;
            
            return (
            <tr
              key={pokemon.id}
              className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center gap-3">
                  <p>{pokemon.id}</p>
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
                  See details
                </div>
              </td>
            </tr>
          )})}
        </tbody>
      </table>    

    )
}