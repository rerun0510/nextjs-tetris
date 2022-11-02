import { Board } from '@/components/Board'
import { getMinoInfo } from '@/enums'
import { useInterval } from '@/hooks/useInterval'
import { Cell, OperatingMino } from '@/types'
import { Center } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

const initDisplayInfo = () => {
  const col: Cell[][] = []
  for (let i = 0; i < 20; i++) {
    const row: Cell[] = []
    for (let j = 0; j < 10; j++) {
      row.push({ color: '', operating: false })
    }
    col.push(row)
  }
  return col
}

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [operatingMino, setOperationgMino] =
    useState<OperatingMino>({
      pointX: 3,
      pointY: 0,
      mino: 'none',
      deg: 0,
    })
  const [displayInfo, setDisplayInfo] = useState(
    initDisplayInfo()
  )
  const [count, setCount] = useState(0)

  const roop = useCallback(() => {
    if (count && count < 20) {
      // 操作中のミノを1セル分落下
      setOperationgMino({
        ...operatingMino,
        pointY: operatingMino.pointY + 1,
      })

      const { point, color } = getMinoInfo(
        operatingMino.mino
      )
      const nextDisplayInfo = initDisplayInfo()
      point[operatingMino.deg].forEach((col, y) => {
        col.forEach((row, x) => {
          if (row) {
            nextDisplayInfo[y + operatingMino.pointY][
              x + operatingMino.pointX
            ] = {
              color,
              operating: true,
            }
          }
        })
      })
      setDisplayInfo([...nextDisplayInfo])
    } else {
      setOperationgMino({
        pointX: 3,
        pointY: 0,
        mino: 't',
        deg: 0,
      })
    }
    setCount(count + 1)
  }, [count, operatingMino])

  useInterval({ onUpdate: () => roop() })

  useEffect(() => {
    if (router.isReady) {
      setLoading(false)
    }
  }, [router.isReady])

  if (loading) return <></>

  return (
    <Center>
      <Board displayInfo={displayInfo} />
    </Center>
  )
}
