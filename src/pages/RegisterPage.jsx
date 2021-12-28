import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack
} from '@chakra-ui/react'

import { Layout } from '../components/Layout'
import { Card } from '../components/Card' 
import { useNavigate } from 'react-router-dom'
import React from 'react'


export function Registerpage() {
  const navigate = useNavigate()

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Register
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            // your register logic here
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input name='email' type='email' autoComplete='email' required />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
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