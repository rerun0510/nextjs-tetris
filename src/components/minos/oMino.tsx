import { NEXT_MINO_SIZE } from '@/constants/setting'
import { getMinoInfo } from '@/enums'
import { Flex } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { MinoSquare } from './minoSquare'

export const OMino: FC = memo(function OMino() {
  const minoInfo = getMinoInfo('o')

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
      </Flex>
      <Flex>
        <MinoSquare
          key={3}
          size={NEXT_MINO_SIZE}
          bg={minoInfo.color}
        />
        <MinoSquare
          key={4}
          size={NEXT_MINO_SIZE}
          bg={minoInfo.color}
        />
      </Flex>
    </Flex>
  )
})
