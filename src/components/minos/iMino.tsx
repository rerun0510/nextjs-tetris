import { NEXT_MINO_SIZE } from '@/constants/setting'
import { getMinoInfo } from '@/enums'
import { Flex } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { MinoSquare } from './minoSquare'

export const IMino: FC = memo(function IMino() {
  const minoInfo = getMinoInfo('i')

  return (
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
        bg={minoInfo.color}
      />
      <MinoSquare
        key={4}
        size={NEXT_MINO_SIZE}
        bg={minoInfo.color}
      />
    </Flex>
  )
})
