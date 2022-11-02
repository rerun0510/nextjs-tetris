import { Cell } from '@/types'
import { Flex, Square } from '@chakra-ui/react'
import { FC, memo, useCallback } from 'react'

type Props = {
  displayInfo: Cell[][]
}

export const Board: FC<Props> = memo(function Board({
  displayInfo,
}) {
  const generateRowBlocks = useCallback(
    (rowBlocks: Cell[], colNum: number) => {
      const items: JSX.Element[] = []
      for (let i = 0; i < 10; i++) {
        items.push(
          <Square
            key={i}
            size="30px"
            border="solid 1px"
            bg={rowBlocks[i].color}
          />
        )
      }
      return <Flex key={colNum}>{items}</Flex>
    },
    []
  )

  const generateColBlocks = useCallback(() => {
    const items: JSX.Element[] = []
    for (let i = 0; i < 20; i++) {
      items.push(generateRowBlocks(displayInfo[i], i))
    }
    return <Flex flexDir="column">{items}</Flex>
  }, [displayInfo, generateRowBlocks])

  return generateColBlocks()
})
