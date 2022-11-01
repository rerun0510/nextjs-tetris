import { getTetriminoInfo } from '@/enums/tetriminos.enum'
import { Block } from '@/types/block'
import { Flex, Square } from '@chakra-ui/react'
import { FC, memo, useCallback } from 'react'

type Props = {
  colBlocks: Array<Array<Block>>
}

export const Board: FC<Props> = memo(function Board({
  colBlocks,
}) {
  const generateRowBlocks = useCallback(
    (rowBlocks: Block[], colNum: number) => {
      const items: JSX.Element[] = []
      for (let i = 0; i < 10; i++) {
        items.push(
          <Square
            key={i}
            size="30px"
            border="solid 1px"
            bg={
              getTetriminoInfo(rowBlocks[i].tetrimino).color
            }
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
      items.push(generateRowBlocks(colBlocks[i], i))
    }
    return <Flex flexDir="column">{items}</Flex>
  }, [colBlocks, generateRowBlocks])

  return generateColBlocks()
})
