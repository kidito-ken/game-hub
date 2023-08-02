import { Text, SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import { Genre } from '../hooks/useGenres'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

interface GameGridProps {
  selectedGenre: Genre | null
}


const GameGrid = ({selectedGenre}:GameGridProps) => {
const {data, error, isLoading}=useGames(selectedGenre)  
const skeletons = [1,2,3,4,5,6]
    

  return (
    <>
        {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2, lg:3, xl:5}} spacing='20px'>
      {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
        {data.map(data => <GameCard key={data.id} game={data}/>)}
    </SimpleGrid>
   </>
  )
}

export default GameGrid