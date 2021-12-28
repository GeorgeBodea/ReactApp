import {
  Heading
} from '@chakra-ui/react'

import { Layout } from '../components/Layout'


export function Home() {
  return (
    <Layout>
      <Heading textAlign='center' my={14}>
        Home Page
      </Heading>
    </Layout>
  )
}