import React from 'react'
import styled from 'styled-components'
import Bubbles1 from './bubbles1'
import Bubbles2 from './bubbles2'
import Bubbles3 from './bubbles3'

const LaxBubbles = styled.div`
  position: absolute;
  object-fit: cover;
  z-index: -99;
  transition: all 0.5s ease;

  &.first {
    left: -150%;
    top: 60%;
    transform: translateZ(-9px) scale(2.1);
    svg {
      filter: ${({ theme }) => !theme.isDark && `opacity(0.4)`};
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      left: -80%;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      left: -100%;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      left: -50%;
    }
    @media screen and (min-width: 1600px) {
      left: -40%;
    }
  }

  &.second {
    right: -170%;
    top: 150%;
    transform: translateZ(-26px) scale(2);
    svg {
      filter: blur(1.4px);
    }

    ${({ theme }) => theme.mediaQueries.md} {
      top: 100%;
      right: -140%;
    }
    @media screen and (min-width: 1600px) {
      right: -70%;
      top: 70%;
    }
  }

  &.third {
    top: 380%;
    right: -50%;
    transform: translateZ(-40px) scale(2.4);
    svg {
      filter: blur(4px) ${({ theme }) => (theme.isDark ? 'opacity(0.4)' : 'opacity(0.1)')};
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      top: 300%;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      top: 250%;
    }
  }

  &.fourth {
    top: 320%;
    left: -400%;
    transform: translateZ(-50px) scale(4);
    svg {
      filter: blur(1.4px) ${({ theme }) => (theme.isDark ? `opacity(0.6)` : `opacity(0.4)`)};
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      top: 115%;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      top: 250%;
      left: -230%;
    }
  }
  &.overrideStyles {
    top: 0 !important;
    transform: translateZ(0px) scale(0.4) !important;
  }
`

export default () => {
  return (
    <>
      <LaxBubbles className="parallaxBubbles first">
        <Bubbles1 width={200} />
      </LaxBubbles>
      <LaxBubbles className="parallaxBubbles second">
        <Bubbles2 width={200} />
      </LaxBubbles>
      <LaxBubbles className="parallaxBubbles third">
        <Bubbles3 width={200} />
      </LaxBubbles>
      <LaxBubbles className="parallaxBubbles fourth">
        <Bubbles2 width={200} />
      </LaxBubbles>
    </>
  )
}
