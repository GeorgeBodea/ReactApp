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


export function Loginpage() {
  const navigate = useNavigate()

  return (
    <Layout>
      <Heading textAlign='center' my={14}>
        Login
      </Heading>

      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            // your login logic here
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
            {/* <PasswordField /> */}
            <Button type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Sign in
            </Button>

          </Stack>
        </chakra.form>

        <Button variant='solid'  
                colorScheme='primary' 
                isFullWidth 
                my={6}
                fontSize='md' 
                onClick={() => navigate('/register')}>
            Register
        </Button>
    
        <Button
          variant='outline'
          isFullWidth
          colorScheme='red'
          onClick={() => alert('sign in with google')}
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  )

}