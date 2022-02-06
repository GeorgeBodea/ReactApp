import { Layout } from '../react_components/Layout'
import {  
  chakra,
  Container, 
  Heading } from '@chakra-ui/react'
import { useAuth } from '../contexts/AppContexts'

export function Profilepage() {
  const { currentUser } = useAuth()

  return (
    <Layout>
      <Heading>
        Profile page
      </Heading>

      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre>
          {JSON.stringify(currentUser, null, 2)}
        </chakra.pre>
      </Container>
    </Layout>
  )
}