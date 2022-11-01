import { Flex, Box, Circle } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex>
        <Box h="5rem" w="5rem" bg="red" />
        <Box h="5rem" w="5rem" bg="blue" />
        <Box h="5rem" w="5rem" bg="green" />
      </Flex>
      <Flex flexDir="column">
        <Box h="5rem" w="5rem" bg="blue" />
        <Box h="5rem" w="5rem" bg="green" />
        <Box h="5rem" w="5rem" bg="red" />
      </Flex>
      <Circle size="5rem" bg="yellow" />
    </>
  )
}
