import { Container } from '@chakra-ui/react'
import { Navbar } from './NavBar'

export function Layout(props) {
  return (
    <>
      <Navbar />
      <Container maxW='container.lg'>{props.children}</Container>
    </>
  )
}