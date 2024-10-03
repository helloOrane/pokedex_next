import Link from "next/link";
import { PokemonTable } from "../lib/types";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "@/components/ui/avatar";

type IProps = {
    datas: PokemonTable[];
}
export default function Table(props: IProps) {
  console.log('pokemon 0', props.datas[0])
  
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
              <th scope="col" className="px-4 py-5 font-bold">
                Genus
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Details</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {props.datas.map((data:PokemonTable) => {   
              // console.log('data', data) 
              return (
              <tr
                key={data.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <p>{data.pokedex_number}</p>
                  </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <div className="m-auto">
                    <Avatar className="h-28 w-28">
                      <AvatarImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.pokedex_number}.png`} alt={data.name} className="max-h-full max-w-full  p-2  m-auto "/>
                    </Avatar>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {data.name}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {data.typing.map((type:string) => (<p key={type}>{type}</p>))}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{data.status}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{data.genus}</p>
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <Link href={`/pokemons/${data.pokedex_number}`} className="flex h-10 items-center rounded-lg bg-gray-600 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">See details</Link>
                  </div>
                </td>
              </tr>
            )})}
          </tbody>
      </table>    

    )
}