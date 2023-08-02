import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { platform } from 'os'
import { Game } from '../hooks/useGames'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'

interface GameCardProps{
    game: Game
}

const GameCard = ({game}:GameCardProps) => {
  return (
    <Card overflow={'hidden'}>
        <Image src={game.background_image} blockSize='200px'/>
        <CardBody>
            <Heading pb={1} fontSize={'2xl'}>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard