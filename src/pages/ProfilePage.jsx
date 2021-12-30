import { Layout } from '../components/Layout'
import {  
  Container, 
  Heading } from '@chakra-ui/react'
import { Card } from '../components/Card'

export function Profilepage() {
  return (
    <Layout>
      <Heading>
        Profile page
      </Heading>

      <Container maxW='container.lg' overflowX='auto' py={4}></Container>
    </Layout>
  )
}