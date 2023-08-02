import { HStack, List, ListItem, VStack, Image, Text } from '@chakra-ui/react'
import useData from '../hooks/useData'
import useGenres, { Genre } from '../hooks/useGenres'

const GenreList = () => {
    const {data }=useGenres()
  return (

        <List>
            {data.map(genre => <ListItem key={genre.id} padding={1}>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={genre.image_background}/>
                    <Text fontSize={'lg'}>{genre.name}</Text>
                </HStack></ListItem>)}
        </List>
        
  )
}

export default GenreList