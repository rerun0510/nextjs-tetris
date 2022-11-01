import { useInterval } from '@/hooks/useInterval'
import { Block } from '@/types/block'
import { Center } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Board } from '../components/Board'

export const initBlocks = () => {
  const col: Block[][] = []
  for (let i = 0; i < 20; i++) {
    const row: Block[] = []
    for (let j = 0; j < 10; j++) {
      row.push({ tetrimino: 'none' })
    }
    col.push(row)
  }
  col[0][4] = { tetrimino: 'i' }
  return col
}

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [blocks, setBlocks] = useState(initBlocks())

  const [count, setCount] = useState(0)
  useInterval({ onUpdate: () => setCount(count + 1) })

  useEffect(() => {
    if (router.isReady) {
      setLoading(false)
    }
  }, [router.isReady])

  useEffect(() => {
    if (count && count < 20) {
      const tmpBlocks = [...blocks]
      tmpBlocks[count][4] = tmpBlocks[count - 1][4]
      tmpBlocks[count - 1][4] = { tetrimino: 'none' }
      setBlocks(tmpBlocks)
    }
  }, [count])

  console.log(count)

  if (loading) return <></>

  return (
    <Center>
      <Board colBlocks={blocks} />
    </Center>
  )
}
