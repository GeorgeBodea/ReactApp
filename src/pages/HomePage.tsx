import {
  Heading, 
  Icon,
  IconButton,
  Button,
  VStack, 
  Stack,
  Spacer,
  Box,
  Flex,
  Text
} from '@chakra-ui/react'

import { Layout } from '../react_components/Layout'

import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { DiAndroid, DiReact } from 'react-icons/di'
import { SiDotnet } from 'react-icons/si'
import { MdSecurity } from 'react-icons/md'

import Resume from '../Resume/George_Bodea_CV.pdf'

export function Home() {

  return (
    <Layout>
      <Heading textAlign='center' my={14} fontWeight='semibold'>
        <Stack>
            <Flex alignSelf="center">
              <Box align="center">
                <Text fontWeight='bold' bgGradient="linear(to-r, cyan.500, blue.400, purple.500)" bgClip="text">Hello, <br/>I'm George</Text>
              </Box>
            </Flex>
        </Stack>
      </Heading>

      <VStack>
        <Flex w="100%">
         <Spacer></Spacer>
          <a target = "_blank" href="https://www.facebook.com/bodea.george.9"  rel="noreferrer">
            <IconButton aria-label="facebook_icon" fontSize='25px' icon={<FaFacebook/>}  isRound={true}></IconButton>
          </a>
          <a target = "_blank" href="https://github.com/GeorgeBodea"  rel="noreferrer">
            <IconButton aria-label="github_icon" fontSize='25px' icon={<FaGithub/>} isRound={true}></IconButton>
          </a>
          <a target = "_blank" href="https://www.linkedin.com/in/george-bodea"  rel="noreferrer">
            <IconButton aria-label="linkedin_icon" fontSize='25px' icon={<FaLinkedin/>} isRound={true}></IconButton>
          </a>
        </Flex>
      </VStack>

      <br></br>
      <br></br>
      <br></br>

      <VStack>
        <Text>
        I am a Computer Science student at the University of Bucharest, in my final year, pursuing a bachelor's degree. 
        My main interests are cibernetic security, web and Android devolpment.
        </Text>

        <Flex w="100%">
        <Box alignSelf="center" w="33%" px="4" py="16">
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" justify="flex-end">
            <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>
        </Box>

        <Box alignSelf="center"  w="33%" px="4" py="16">
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" justify="flex-end">
            <Flex direction="row">
              <Icon color="white" p="4" as={DiReact} w="24" h="24" /> 
              <Text color="white" p="4" pt="4" fontSize="4xl" fontWeight="bold">+</Text>
              <Icon color="white" p="4" as={SiDotnet} w="24" h="24" />
            </Flex>
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
              React Apps and ASP.NET Apps
            </Text>
          </Flex>
        </Box>

        <Box alignSelf="center" w="33%" px="4" py="16">
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" justify="flex-end">
            <Icon color="white" p="4" as={MdSecurity} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
              Cibernetic Security
            </Text>
          </Flex>
        </Box>

        </Flex>

        <br></br>
        <br></br>

        <Text>
        But what better way to find out about my interests then actually seeing my past experiences? 
        </Text>

        <br></br>

        <Button align="center" mt="12">
        <a href = {Resume} target = "_blank" color="black" rel="noreferrer">See my resume</a>
        </Button>
      </VStack>


      <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <Icon color="white" p="4" as={MdSecurity} w="24" h="24" />
        </Stack>
        <Text alignSelf={{ base: 'center', sm: 'start' }} > © 2022 GeorgeB, Inc. No rights reserved. </Text>
      </Stack>
    </Box>

    </Layout>
  )
}