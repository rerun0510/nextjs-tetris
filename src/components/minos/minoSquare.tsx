import { Square, SquareProps } from '@chakra-ui/react'
import { FC, memo } from 'react'

export const MinoSquare: FC<SquareProps> = memo(
  function MinoSquare({ ...rest }) {
    return (
      <Square
        key={rest.key}
        bg={rest.bg || rest.backgroundColor}
        size={rest.size ?? '25px'}
        border={rest.border ?? 'solid 1px'}
      />
    )
  }
)
