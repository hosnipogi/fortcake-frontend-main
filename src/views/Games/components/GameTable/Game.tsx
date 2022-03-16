import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Skeleton, Text, Flex, Button, ChevronUpIcon, ChevronDownIcon, useMatchBreakpoints } from 'fortcake-uikit-v2'
import axios from 'axios'
import { GameImage } from 'components/GameImage'
import { Links } from 'fortcake-config-files/dist'
import { GameProps, ChainProps } from '../types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px 12px;
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 0 0 16px;
    flex-direction: row;
  }
`

const FlexDesktop = styled(Flex)`
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const TokenWrapper = styled.div`
  margin-right: 18px;
  width: 100px;
  margin-bottom: 12px;
  align-self: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0;
  }
`

const Image = styled(GameImage)`
  width: 90px;
`

const FlexButton = styled(Flex)`
  margin-left: 4px;
  justify-content: space-between;
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: flex-start;
  }
  &.links {
    margin-top: 20px;
    a:first-child {
      margin-right: 20px;
    }
  }
`

const Rating: React.FC<{ votes: number }> = ({ children, votes }) => {
  const fail = votes < 100
  const { isMobile, isTablet } = useMatchBreakpoints()
  return (
    <Flex alignItems="center" mr={isMobile || isTablet ? '1em' : ''}>
      {!fail ? <ChevronUpIcon color="success" width={25} /> : <ChevronDownIcon width={25} color="failure" />}
      <Text
        color={!fail ? 'success' : 'failure'}
        fontWeight="bold"
        fontSize="3"
        as="h3"
        style={{
          textShadow: !fail
            ? '#31d0aa40 -15px 6px 20px, #31d0aa40 8px -3px 20px, #31d0aa40 -13px -5px 20px, #31d0aa40 13px 8px 20px'
            : '#bd30786e -15px 6px 20px, #ef52be70 8px -3px 20px, #b35a876b -13px -5px 20px, #9f396d5c 13px 8px 20px',
        }}
      >
        {children}
      </Text>
    </Flex>
  )
}

const ChainAddress: React.FC<{ chain: ChainProps[] }> = ({ chain }) => (
  <FlexButton className="chainAdress">
    {chain.map((c) => (
      <Button
        key={`${c.chain}-${c.address}`}
        as="a"
        target="_blank"
        style={{ marginLeft: '10px' }}
        href={
          c.chain === 'BSC'
            ? `https://bscscan.com/address/${c.address}`
            : c.chain === 'ETH'
            ? `https://etherscan.io/address/${c.address}`
            : '#'
        }
        variant="secondary"
        scale="xs"
      >
        {c.chain}
      </Button>
    ))}
  </FlexButton>
)

const Game: React.FunctionComponent<GameProps> = ({ title, subtitle, logo, votes, cta, chain }) => {
  const { isMobile, isTablet, isDesktop } = useMatchBreakpoints()
  const [base64, setBase64] = useState('data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')
  const [imgLoading, setImgLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    const fetchImg = async () => {
      try {
        const response = await axios.get(logo, {
          responseType: 'arraybuffer',
          signal: controller.signal,
        })
        const b64 = Buffer.from(response.data, 'binary').toString('base64')
        const src = `data:image/png;base64,${b64}`
        setBase64(src)
        setImgLoading(false)
      } catch (e) {
        console.info(e)
      }
    }

    fetchImg()

    return () => {
      controller.abort()
    }
  }, [logo])

  return (
    <Container>
      <FlexDesktop>
        <TokenWrapper>
          {imgLoading ? (
            <Skeleton variant="circle" animation="waves" width={90} height={90} />
          ) : (
            <Image image={base64} width={90} height={90} />
          )}
        </TokenWrapper>
        <Flex flexDirection="column" style={{ width: '100%' }}>
          <Flex alignItems="center">
            {(isMobile || isTablet) && <Rating votes={votes}>{votes}</Rating>}
            <Flex justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
              <Text color="secondary" fontSize={isMobile || isTablet ? '16px' : '12px'} bold textTransform="uppercase">
                {title}
              </Text>
              {isMobile && <ChainAddress chain={chain} />}
            </Flex>
          </Flex>
          <Flex justifyContent="space-between">
            <Text bold>{subtitle}</Text>
            {isDesktop && <Rating votes={votes}>{votes}</Rating>}
          </Flex>
          <Flex justifyContent="space-between" alignItems="flex-end">
            <FlexButton className="links">
              <Button as="a" href={chain.some((c) => c.chain === 'BSC') ? Links.bsc : Links.eth} scale="sm">
                Swap
              </Button>
              <Button as="a" variant="secondary" href={cta} scale="sm">
                Find out more
              </Button>
            </FlexButton>
            {(isDesktop || isTablet) && <ChainAddress chain={chain} />}
          </Flex>
        </Flex>
      </FlexDesktop>
    </Container>
  )
}

export default Game
