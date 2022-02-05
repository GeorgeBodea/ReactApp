import {
  Heading
} from '@chakra-ui/react'

import { Layout } from '../react_components/Layout'
import { useAuth } from '../contexts/AppContexts'


export function Home() {
  const { currentUser } = useAuth()
  return (
    <Layout>
      <Heading textAlign='center' my={14}>
        Home Page
      </Heading>

      <p>{`The current user is ${currentUser}`}</p>
    </Layout>
  )
}