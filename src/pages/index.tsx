import { Flex, Box, Circle } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (router.isReady) {
      setLoading(false)
    }
  }, [router.isReady])

  if (loading) return <></>

  return (
    <Box>
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
    </Box>
  )
}
