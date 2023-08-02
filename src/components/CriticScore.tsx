import { Badge } from '@chakra-ui/react'
import React from 'react'

interface CriticScoreProps{
    score: number
}

const CriticScore = ({score}:CriticScoreProps) => {
    let color = score > 75 
    ? 'green'
    : score >60 
    ? 'yellow'
    : 'red'
  return (
    <Badge color={color} fontSize={"14px"} paddingX={ '5px'}>{score}</Badge>
  )
}

export default CriticScore