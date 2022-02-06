import { Box } from '@chakra-ui/react'
import React from 'react'

export const Card = (props:any) => (
  <Box
    py='8'
    px={{ base: '4', md: '10' }}
    shadow='base'
    rounded={{ sm: 'lg' }}
    {...props}
  />
)