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

import { Layout } from '../components/Layout'
import { Card } from '../components/Card' 
import { useNavigate } from 'react-router-dom'
import { React, useState } from 'react'
import { useAuth } from '../contexts/AppContexts'


export function Registerpage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
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
            // your register logic here

            console.log(email, password)
            setIsSubmitting(true)
            register(email, password)
            .then((response) => console.log(response))
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
            .finally(() => setIsSubmitting(false))
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={e=> setEmail(e.target.value)}
              name='email' type='email' autoComplete='email' required />
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

            <Button type='submit' colorScheme='primary' size='lg' fontSize='md' isLoading={isSubmitting}>
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