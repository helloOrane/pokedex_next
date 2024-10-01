import { PrismaClient } from '@prisma/client'
import { PokemonTable } from './types'

const prisma = new PrismaClient()

const ITEMS_PER_PAGE = 25;

export async function fetchPokemons(){
   return await prisma.pokemon.findMany()  
}


export async function fetchFilteredPokemons(query: string, page: number = 1) {
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const whereClause: {
    OR: Array<{
      name?: { contains: string };
      pokedex_number?: { equals: number };
    }>;
  } = {
    OR: [{
      name: {
        contains: query
      }}
    ]
  };

  if (query !== '' && !isNaN(parseInt(query))) {
    whereClause.OR.push({
      pokedex_number: {
        equals: parseInt(query)
      }
    });
  }

  const results = await prisma.pokemon.findMany({
    skip: offset,
    take: ITEMS_PER_PAGE,
    where: whereClause
  });

  const count = await prisma.pokemon.count({
    where: whereClause
  });
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

  const responseTable: PokemonTable[] = results.map((result) => {
    return {
      id: result.id,
      pokedex_number: result.pokedex_number || 0,
      name: result.name || 'Unknown',
      types: result.typing?.split('~') || [],
      status: 'uncaptured', // TODO: Add status table
    };
  });

  return {pokemons: responseTable, count: totalPages};
}


export async function fetchPokemonCount(query:string){
  await prisma.pokemon.count({})
}
export async function fetchPokemonById(id:number){
   return await prisma.pokemon.findUnique({
      where:{id: id}
   })
}






