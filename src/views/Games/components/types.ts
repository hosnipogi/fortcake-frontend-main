import { Game } from 'state/types'

export type TableProps = {
  data?: TableDataTypes[]
  selectedFilters?: string
  sortBy?: string
  sortDir?: string
  onSort?: (value: string) => void
}

export type ColumnsDefTypes = {
  id: number
  label: string
  name: string
  sortable: boolean
}

export type ScrollBarProps = {
  ref: string
  width: number
}

export type TableDataTypes = {
  POOL: string
  APR: string
  EARNED: string
  STAKED: string
  DETAILS: string
  LINKS: string
}

// export const MobileColumnSchema: ColumnsDefTypes[] = [
//   {
//     id: 1,
//     name: 'farm',
//     sortable: true,
//     label: '',
//   },
//   {
//     id: 2,
//     name: 'earned',
//     sortable: true,
//     label: 'Earned',
//   },
//   {
//     id: 3,
//     name: 'apr',
//     sortable: true,
//     label: 'APR',
//   },
//   {
//     id: 6,
//     name: 'details',
//     sortable: true,
//     label: '',
//   },
// ]

export const DesktopColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'game',
    sortable: true,
    label: '',
  }, // this is needed by pancakeswap uikit useTable
]

export type ChainProps = {
  chain: string
  address: string
}

export type GameProps = Omit<Game, 'address' | 'chain'> & {
  chain: ChainProps[]
  price?: {
    bnb: number
    usd: number
  }
}
