import { Text, SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'


const GameGrid = () => {
const {games, error, isLoading}=useGames()    
const skeletons = [1,2,3,4,5]
    

  return (
    <>
        {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2, lg:3, xl:5}} spacing='20px'>
      {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
        {games.map(game => <GameCard key={game.id} game={game}/>)}
    </SimpleGrid>
   </>
  )
}

export default GameGrid