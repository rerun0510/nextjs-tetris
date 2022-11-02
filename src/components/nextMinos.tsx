import { Mino } from '@/enums'
import { Text, VStack } from '@chakra-ui/react'
import { FC, memo } from 'react'

type Props = {
  nextMinos: Mino[]
}

export const NextMinos: FC<Props> = memo(
  function NextMinos({ nextMinos }) {
    return (
      <VStack>
        {(() => {
          const items: JSX.Element[] = []
          for (let i = 0; i < 7; i++) {
            items.push(<Text key={i}>{nextMinos[i]}</Text>)
          }
          return items
        })()}
      </VStack>
    )
  }
)
