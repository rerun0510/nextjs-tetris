import { NEXT_MINO_SIZE } from '@/constants/setting'
import { getMinoInfo } from '@/enums'
import { Flex } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { MinoSquare } from './minoSquare'

export const ZMino: FC = memo(function ZMino() {
  const minoInfo = getMinoInfo('z')

  return (
    <Flex flexDir="column">
      <Flex>
        <MinoSquare
          key={1}
          size={NEXT_MINO_SIZE}
          bg={minoInfo.color}
        />
        <MinoSquare
          key={2}
          size={NEXT_MINO_SIZE}
          bg={minoInfo.color}
        />
        <MinoSquare
          key={3}
          size={NEXT_MINO_SIZE}
          border="none"
        />
      </Flex>
      <Flex>
        <MinoSquare
          key={4}
          size={NEXT_MINO_SIZE}
          border="none"
        />
        <MinoSquare
          key={5}
          size={NEXT_MINO_SIZE}
          bg={minoInfo.color}
        />
        <MinoSquare
          key={6}
          size={NEXT_MINO_SIZE}
          bg={minoInfo.color}
        />
      </Flex>
    </Flex>
  )
})
