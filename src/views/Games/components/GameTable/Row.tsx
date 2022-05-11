import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex, useDelayedUnmount } from 'fortcake-uikit-v2'
import Game from './Game'
import { GameProps } from '../types'
import ActionPanel from './Actions/ActionPanel'
import TruncateText from '../../../../utils/truncateText'

export interface RowProps {
  game: GameProps
}

const WORDS_LIMIT = 10

const CellInner = styled.div`
  padding: 24px 8px 0 0px;
  display: flex;
  width: 100%;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 24px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 12px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
`

const StyledTd = styled.td`
  ${({ theme }) =>
    theme.isDark
      ? `background-color: rgba(0, 0, 0, 0.4)`
      : `background-image: linear-gradient(101deg, #f4f4f4bf, #ffffffcf, #dfdfdfcc)`};
  border-radius: 14px;
  box-shadow: 2px 9px 11px 2px ${({ theme }) => (theme.isDark ? 'rgb(6 6 6 / 54%)' : 'rgb(6 6 6 / 10%)')};
  border-top: 2px solid rgba(255, 255, 255, 0.4);
  border-left: 3px solid rgba(255, 255, 255, 0.2);
`

const Row: React.FunctionComponent<
  RowProps & {
    closePanelEvent: Event
  }
> = (props) => {
  const { game, closePanelEvent } = props
  const [showDescription, setShowDescription] = useState(false)
  const shouldRenderRow = useDelayedUnmount(showDescription, 300)

  useEffect(() => {
    const handleClosePanelEvent = () => {
      setShowDescription(false)
    }
    window.addEventListener('closePanel', handleClosePanelEvent)

    return () => {
      window.removeEventListener('closePanel', handleClosePanelEvent)
    }
  }, [])

  const toggleDescription = () => {
    const flag = showDescription
    window.dispatchEvent(closePanelEvent)
    setShowDescription(flag ? !flag : true)
  }

  return (
    <>
      <StyledTr onClick={toggleDescription}>
        <StyledTd className="tilted">
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            <CellInner>
              <Game
                {...game}
                subtitle={`${TruncateText(game.subtitle, WORDS_LIMIT)}...`}
                actionPanelOpen={showDescription}
              />
            </CellInner>
          </Flex>
        </StyledTd>
      </StyledTr>
      {shouldRenderRow && (
        <tr>
          <td colSpan={6}>
            <ActionPanel details={{ ...game, address: game.chain[0].address }} expanded={showDescription} />
          </td>
        </tr>
      )}
    </>
  )
}

export default Row
