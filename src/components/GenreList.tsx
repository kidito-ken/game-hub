import { HStack, List, ListItem, VStack, Image, Text, Button } from '@chakra-ui/react'
import useData from '../hooks/useData'
import useGenres, { Genre } from '../hooks/useGenres'

export interface GenreListProps{
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}:GenreListProps) => {
    const {data }=useGenres()
  return (

        <List>
            {data.map(genre => <ListItem key={genre.id} padding={1}>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={genre.image_background}/>
                    <Button onClick={()=> onSelectGenre(genre)} variant={'link'} fontSize={'lg'}>{genre.name}</Button>
                </HStack></ListItem>)}
        </List>
        
  )
}

export default GenreList