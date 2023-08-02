import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import { Platform } from '../hooks/useGames'


interface PlatformIconListProps{
    platforms: Platform[]
}

const PlatformIconList = ({platforms}:PlatformIconListProps) => {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo : SiNintendo,
        max: FaApple,
        linux: FaLinux,
        android: FaAndroid
    }


  return (
    <HStack marginY={1}>
    {platforms.map((platform) => (
    <Icon as={iconMap[platform.slug]} color='gray.500'/>
    ))}
    </HStack>
  )
}

export default PlatformIconList