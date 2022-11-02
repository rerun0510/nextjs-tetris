import { IMino } from '@/components/minos'
import {
  MINO_POINT_I,
  MINO_POINT_J,
  MINO_POINT_L,
  MINO_POINT_NONE,
  MINO_POINT_O,
  MINO_POINT_S,
  MINO_POINT_T,
  MINO_POINT_Z,
} from '@/constants/minoPoint'
import { Point } from '@/types'
import { FC } from 'react'

const minos = {
  NONE: 'none',
  I: 'i',
  O: 'o',
  T: 't',
  J: 'j',
  L: 'l',
  S: 's',
  Z: 'z',
} as const

export type Mino = typeof minos[keyof typeof minos]

type MinoInfo = {
  mino: Mino
  point: Point
  color: string
  compornent?: FC
}

const minoInfo: MinoInfo[] = [
  {
    mino: minos.NONE,
    point: MINO_POINT_NONE,
    color: '',
  },
  {
    mino: minos.I,
    point: MINO_POINT_I,
    color: '#7FCCE3',
  },
  {
    mino: minos.O,
    point: MINO_POINT_O,
    color: '#FFD900',
  },
  {
    mino: minos.T,
    point: MINO_POINT_T,
    color: '#884898',
  },
  {
    mino: minos.J,
    point: MINO_POINT_J,
    color: '#0071B0',
  },
  {
    mino: minos.L,
    point: MINO_POINT_L,
    color: '#EE7800',
  },
  {
    mino: minos.S,
    point: MINO_POINT_S,
    color: '#3EB370',
  },
  {
    mino: minos.Z,
    point: MINO_POINT_Z,
    color: '#F20000',
  },
]

export const getMinoInfo = (mino: Mino) => {
  const result =
    minoInfo.find((e) => e.mino === mino) ?? minoInfo[0]
  return result
}

export const getMinos = () => {
  const minos: Mino[] = []
  minoInfo.forEach((e) => minos.push(e.mino))
  return minos
}
