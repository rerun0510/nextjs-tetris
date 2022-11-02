import { Mino } from '@/enums'

export type OperatingMino = {
  pointX: number
  pointY: number
  mino: Mino
  deg: 0 | 90 | 180 | 270
}
