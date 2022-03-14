import React from 'react'
import styled from 'styled-components'
import { Flex } from 'fortcake-uikit-v2'
import Game from './Game'
import { GameProps } from '../types'

export interface RowProps {
  game: GameProps
}

interface RowPropsWithLoading extends RowProps {
  userDataReady: boolean
}

const CellInner = styled.div`
  padding: 24px 8px 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;
  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`

const StyledTr = styled.tr`
  /* cursor: pointer; */
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
`

const Row: React.FunctionComponent<RowPropsWithLoading> = (props) => {
  const { game } = props

  return (
    <>
      <StyledTr>
        <td>
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            <CellInner>
              <Game {...game} />
            </CellInner>
          </Flex>
        </td>
      </StyledTr>
    </>
  )
}

export default Row
