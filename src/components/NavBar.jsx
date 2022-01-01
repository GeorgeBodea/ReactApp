import {
  Box,
  HStack,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../contexts/AppContexts'
import Navlink from './NavLink'

export function Navbar() {
  const { currentUser, logout } = useAuth()

  return (
    <Box
      borderBottom='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
    >
      <HStack py={4} justifyContent='flex-end' maxW='container.lg' mx='auto'>
        <Navlink to='/' name='Home' size='lg' />
        <Spacer />
        { !currentUser ? 
            <>
            <Navlink to='/login' name='Login' />
            <Navlink to='/register' name='Register' />
            </>
          :
            <>
            <Navlink to='/profile' name='Profile' />
            <Navlink
              to='/logout'
              name='Logout'
              onClick={async e => {
                e.preventDefault()
                // handle logout
                logout()

              }}
            />
            </>
        }
    
      </HStack>

    </Box>
  )
}