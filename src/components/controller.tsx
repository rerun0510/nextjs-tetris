import { Action } from '@/types'
import { Button, HStack } from '@chakra-ui/react'
import { FC, memo } from 'react'
import {
  BsArrowRightCircle,
  BsArrowLeftCircle,
} from 'react-icons/bs'
import { FiRotateCcw } from 'react-icons/fi'

type Props = {
  action: (action: Action) => void
}

export const Controller: FC<Props> = memo(
  function Controller({ action }) {
    return (
      <HStack>
        <Button onClick={() => action('left')}>
          <BsArrowLeftCircle />
        </Button>
        <Button onClick={() => action('right')}>
          <BsArrowRightCircle />
        </Button>
        <Button onClick={() => action('rotation')}>
          <FiRotateCcw />
        </Button>
      </HStack>
    )
  }
)
