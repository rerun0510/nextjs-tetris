export const tetriminos = {
  None: 'none',
  I: 'i',
  O: 'o',
  T: 't',
  J: 'j',
  L: 'l',
  S: 's',
  Z: 'z',
} as const

export type Tetriminos =
  typeof tetriminos[keyof typeof tetriminos]

type TetriminoInfo = {
  tetrimino: Tetriminos
  color: string
}

const tetriminoInfo: TetriminoInfo[] = [
  {
    tetrimino: tetriminos.None,
    color: '',
  },
  {
    tetrimino: tetriminos.I,
    color: '#7FCCE3',
  },
  {
    tetrimino: tetriminos.O,
    color: '#FFD900',
  },
  {
    tetrimino: tetriminos.T,
    color: '#884898',
  },
  {
    tetrimino: tetriminos.J,
    color: '#0071B0',
  },
  {
    tetrimino: tetriminos.L,
    color: '#EE7800',
  },
  {
    tetrimino: tetriminos.S,
    color: '#3EB370',
  },
  {
    tetrimino: tetriminos.Z,
    color: '#F20000',
  },
]

export const getTetriminoInfo = (tetrimino: Tetriminos) => {
  const result =
    tetriminoInfo.find((e) => e.tetrimino === tetrimino) ??
    tetriminoInfo[0]
  return result
}
