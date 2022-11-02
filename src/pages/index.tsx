import { Board } from '@/components/board'
import { Controller } from '@/components/controller'
import {
  IMino,
  JMino,
  LMino,
  OMino,
  SMino,
  TMino,
  ZMino,
} from '@/components/minos'
import { NextMinos } from '@/components/nextMinos'
import { getMinoInfo } from '@/enums'
import { useGeneratingMino } from '@/hooks/useGeneratingMino'
import { useInterval } from '@/hooks/useInterval'
import { Action, Cell, Deg, OperatingMino } from '@/types'
import { Box, Center, Flex, VStack } from '@chakra-ui/react'
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
  const { nextMinos, popMino } = useGeneratingMino()

  const updateDisplay = useCallback(() => {
    const { point, color } = getMinoInfo(operatingMino.mino)
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
  }, [operatingMino])

  const down = useCallback(() => {
    if (count && count / 20 !== 0) {
      // 操作中のミノを1セル分落下
      setOperationgMino({
        ...operatingMino,
        pointY: operatingMino.pointY + 1,
      })
      updateDisplay()
    } else {
      setOperationgMino({
        pointX: 3,
        pointY: 0,
        mino: popMino(),
        deg: 0,
      })
    }
    setCount(count + 1)
  }, [count, operatingMino, popMino, updateDisplay])

  useInterval({ onUpdate: () => down() })

  const action = useCallback(
    (action: Action) => {
      switch (action) {
        case 'right':
          setOperationgMino({
            ...operatingMino,
            pointX: operatingMino.pointX + 1,
          })
          break
        case 'left':
          setOperationgMino({
            ...operatingMino,
            pointX: operatingMino.pointX - 1,
          })
          break
        case 'rotation':
          setOperationgMino({
            ...operatingMino,
            deg: rotation(operatingMino.deg),
          })
      }
      updateDisplay()
    },
    [operatingMino, updateDisplay]
  )

  const rotation = (deg: Deg): Deg => {
    switch (deg) {
      case 0:
        return 90
      case 90:
        return 180
      case 180:
        return 270
      case 270:
        return 0
    }
  }

  useEffect(() => {
    if (router.isReady) {
      setLoading(false)
    }
  }, [router.isReady])

  if (loading) return <></>

  return (
    <Center>
      <Flex>
        <VStack flexDir="column" alignItems="center">
          <OMino />
          <IMino />
          <TMino />
          <LMino />
          <JMino />
          <SMino />
          <ZMino />
        </VStack>
        <Flex flexDir="column" alignItems="center">
          <Board displayInfo={displayInfo} />
          <Box h="30px" />
          <Controller action={action} />
        </Flex>
        <NextMinos nextMinos={nextMinos} />
      </Flex>
    </Center>
  )
}
