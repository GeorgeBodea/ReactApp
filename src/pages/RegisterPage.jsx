import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast
} from '@chakra-ui/react'

import { Layout } from '../react_components/Layout'
import { Card } from '../react_components/Card' 
import { useAuth } from '../contexts/AppContexts'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import React from 'react'


export function Registerpage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()

  const { register } = useAuth()

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Register
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()

            register(email, password)
            .then((response) => { navigate('/profile') })
            .catch((error) => 
                    {console.log(error.message)
                    toast(
                      { description: error.message, 
                        status: 'error',
                        duration: 6000,
                        isClosable: true
                      })
                    }
                    )
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input 
                value={email} 
                onChange={e=> setEmail(e.target.value)}
                name='email' 
                type='email' 
                autoComplete='email' 
                required />
            </FormControl>

            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                name='password'
                type='password'
                autoComplete='password'
                required
              />
            </FormControl>

            <Button type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Sign up
            </Button>
          </Stack>
        </chakra.form>

        <Button variant='solid'  
                colorScheme='primary' 
                isFullWidth 
                my={6}
                fontSize='md' 
                onClick={() => navigate('/login')}>
            Login
        </Button>

      </Card>
    </Layout>
  )
}