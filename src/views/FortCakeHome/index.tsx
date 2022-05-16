import React from 'react'
import { Box, Text, Button, Flex, dark, useMatchBreakpoints } from 'fortcake-uikit-v2'
import { Socials } from '../../components/Menu/config/config'
import useTheme from '../../hooks/useTheme'
import { PageMeta } from '../../components/Layout/Page'

// Images

import CakeImage from '../../assets/images/logo/logo_cake1.png'
import {
  Swap,
  Dao,
  Earn,
  Play,
  SocialIg,
  SocialMedium,
  SocialTwitter,
  SocialDiscord,
  BscScan,
  CoinGecko,
  PancakeSwap,
} from '../../assets/images/home/svg'
import Token from '../../assets/images/home/token.svg'
import Tokenomics from '../../assets/images/home/tokenomics.png'
import GamePreview from '../../assets/images/home/gamepreview-noshadow.png'
import SwapPreview from '../../assets/images/home/gamepreviewhq.png'
import {
  Heading,
  Section,
  SectionFlex,
  Features,
  LazyImage,
  SocialLink,
  ListItems,
  ListWrapper,
  PageHeader,
  ExternalLink,
} from './styles'
import RoadMap from './components/roadMap'

const [Twitter, Discord, Instagram, Medium, BscScanHref, PancakeSwapHref, CoinGeckoHref] = Socials

const Home: React.FC = () => {
  const { isDark } = useTheme()
  const { isMobile } = useMatchBreakpoints()
  const ParticipateSection = React.useRef<HTMLDivElement>(null)
  const scrollToParticipate = (): void => {
    ParticipateSection.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const mobileHeaderStyle = isMobile
    ? {
        fontSize: '38px',
        marginRight: '10px',
      }
    : {}

  return (
    <>
      <PageMeta />
      <Section className="landingSection">
        <SectionFlex className="grid">
          <PageHeader>
            <Flex alignItems="center" mb={isMobile ? '40px' : '20px'} justifyContent="space-between">
              <Heading
                as="h1"
                scale="xxl"
                style={{
                  ...mobileHeaderStyle,
                  textShadow: isDark
                    ? '3px -2px 1px rgb(25 159 125), -3px 3px 1px rgb(33 229 180)'
                    : '#f1afc2 3px -2px 1px, #bb5768 -3px 3px 1px',
                }}
              >
                THE FUTURE {isMobile && <br />} IS HERE
              </Heading>
              <LazyImage src={CakeImage} width={100} height={78} className="imgShowOnMobile" />
            </Flex>
            <Heading as="h4" scale="md" override>
              FORTCAKE is a community driven crypto gaming platform built on the Binance Smart Chain. The goal is
              simple; introduce the world to PLAY-TO-EARN.
            </Heading>
            <Flex className="socialLinks">
              <SocialLink href={Discord.href}>
                <SocialDiscord width={56} height={56} fill={isDark ? dark.colors.secondary : dark.colors.primary} />
              </SocialLink>
              <SocialLink href={Twitter.href}>
                <SocialTwitter width={56} height={56} fill={isDark ? dark.colors.secondary : dark.colors.primary} />
              </SocialLink>
              <SocialLink href={Instagram.href}>
                <SocialIg width={56} height={56} fill={isDark ? dark.colors.secondary : dark.colors.primary} />
              </SocialLink>
              <SocialLink href={Medium.href}>
                <SocialMedium width={56} height={56} fill={isDark ? dark.colors.secondary : dark.colors.primary} />
              </SocialLink>
            </Flex>
            <Flex className="cta">
              <Button variant="primary" as="a" mr="40px" href="https://fortcake.gitbook.io/fortcake/">
                White Paper
              </Button>
              <Button variant="secondary" as="button" onClick={scrollToParticipate}>
                Learn More
              </Button>
            </Flex>
          </PageHeader>
          <LazyImage src={CakeImage} width={430} height={336} className="imgHideOnMobile" />
        </SectionFlex>
        <SectionFlex className="address">
          <SocialLink href={BscScanHref.href}>
            <BscScan lightLogo={isDark} width={190} height={60} />
          </SocialLink>
          <SocialLink href={CoinGeckoHref.href}>
            <CoinGecko lightLogo={isDark} width={190} height={60} />
          </SocialLink>
          <SocialLink href={PancakeSwapHref.href}>
            <PancakeSwap lightLogo={isDark} width={190} height={60} />
          </SocialLink>
        </SectionFlex>
      </Section>

      <Section className="featuresSection">
        <SectionFlex justifyContent="space-between" alignItems="top" className="features">
          <Features>
            <Play width={90} height={90} fill={isDark ? dark.colors.secondary : dark.colors.primary} />
            <Heading as="h4">Play</Heading>
            <Text>Find PLAY-TO-EARN games, Featuring top crypto games all in one place...</Text>
          </Features>
          <Features>
            <Swap width={90} height={90} fill={isDark ? dark.colors.secondary : dark.colors.primary} />
            <Heading as="h4">Swap</Heading>
            <Text>FORTCAKE allows users to trade tokens without the need for centralized exchanges.</Text>
          </Features>
          <Features>
            <Earn width={90} height={90} fill={isDark ? dark.colors.secondary : dark.colors.primary} />
            <Heading as="h4">Earn</Heading>
            <Text>Earn tokens and rewards on FORTCAKE by joining & more.</Text>
          </Features>
          <Features>
            <Dao width={90} height={90} fill={isDark ? dark.colors.secondary : dark.colors.primary} />
            <Heading as="h4">DAO</Heading>
            <Text>More than a platform, FORTCAKE is a community DAO. (Decentralized autonomous organization)</Text>
          </Features>
        </SectionFlex>
      </Section>

      <Section>
        <Box width="100%">
          <Heading as="h2" scale="xl" mb={[0, 0, 0, 60]} textAlign="center">
            Roadmap
          </Heading>
        </Box>
        <RoadMap />
      </Section>

      <Section>
        <SectionFlex className="participate" ref={ParticipateSection}>
          <Heading as="h2" scale="xl">
            How to Participate
          </Heading>
          <Heading as="h4" scale="lg" override>
            $FORTCAKE is coming soon to PancakeSwap, and will be found on launchpads as well as a future list of
            exchanges. $FORTCAKE is a cryptocurrency gaming token and, as such, we always encourage the use of
            decentralized exchanges.
          </Heading>
        </SectionFlex>
      </Section>

      <Section>
        <SectionFlex className="grid tokenomics small">
          <LazyImage src={Token} width={460} height={460} />
          <Box>
            <Heading as="h2" scale="xl">
              Quick Start Guide
            </Heading>
            <Heading as="h4" scale="lg" override style={{ fontWeight: 'normal' }} mb={30} width="100%">
              Follow these guides to get started using Fortcake
            </Heading>
            <ListWrapper>
              <ListItems>
                <Heading as="h4" scale="lg">
                  1. Create your wallet
                </Heading>
                <Text>
                  To get started on Fortcake, the first thing you&#39;ll need is to set up a wallet that supports BNB
                  Smart Chain (BSC). Wallets are available both on desktop computers and on smartphone devices.
                  You&#39;ll need to choose the wallet that fits your needs best. Follow &nbsp;
                  <ExternalLink href="https://fortcake.gitbook.io/fortcake/get-started/create-a-wallet">
                    this guide
                  </ExternalLink>
                  &nbsp; to create a new wallet.
                </Text>
              </ListItems>
              <ListItems>
                <Heading as="h4" scale="lg">
                  2. Get BEP-20 tokens
                </Heading>
                <Text>
                  The native tokens of BNB Smart Chain (BSC) are BEP-20 tokens. Follow&nbsp;
                  <ExternalLink href="https://fortcake.gitbook.io/fortcake/get-started/get-bep20-tokens">
                    this guide
                  </ExternalLink>
                  &nbsp;to get BEP-20 Tokens or to convert to them.
                </Text>
              </ListItems>
              <ListItems>
                <Heading as="h4" scale="lg">
                  3. Connect your wallet to Fortcake
                </Heading>
                <Text>
                  You&#39;ve made a wallet and gotten your BEP-20 tokens, now you just need to connect your wallet with
                  Fortcake and you&#39;re good to go! Follow&nbsp;
                  <ExternalLink href="https://fortcake.gitbook.io/fortcake/get-started/connect-your-wallet-to-fortcake">
                    this guide
                  </ExternalLink>
                  &nbsp;to connect your wallet.
                </Text>
              </ListItems>
            </ListWrapper>
          </Box>
        </SectionFlex>
      </Section>
      <Section>
        <SectionFlex className="grid tokenomics">
          <Box>
            <Heading as="h2" scale="xl">
              Tokenomics
            </Heading>
            <Text>
              <Box>
                <Text>
                  FORTCAKE is a BEP-20 cryptocurrency governance token that can be traded on the Binance Smart Chain
                  (BSC). FORTCAKE is both a platform and currency used as an independent store of value for gamers and
                  enthusiasts alike.
                </Text>
              </Box>
              <Box style={{ marginTop: '40px' }}>
                <Text>Total Supply: 203,009,146 FORTCAKE</Text>
              </Box>
            </Text>
          </Box>
          <LazyImage src={Tokenomics} width={500} height={374} />
        </SectionFlex>
        <SectionFlex className="grid tokenomics reversed">
          <LazyImage src={GamePreview} width={480} height={359} />
          <Box>
            <Heading as="h2" scale="xl">
              PLAY-TO-EARN
            </Heading>
            <Text>
              FORTCAKE is the future of play-to-earn blockchain based games. Our aim is high, more than a platform, more
              than a community, FORTCAKE is a movement, ten years from now, we will have just begun, blockchain games
              are here to stay.
            </Text>
          </Box>
        </SectionFlex>
        <SectionFlex className="grid tokenomics">
          <Box>
            <Heading as="h2" scale="xl">
              Swap
            </Heading>
            <Text>
              <Box>
                <p>
                  FORTCAKE&apos;s built in Swap feature, Trade your favorite game tokens, No registration, no problem.
                  Connect your wallet, and exchange any token on the Binance blockchain in seconds.
                </p>
              </Box>
            </Text>
          </Box>
          <LazyImage src={SwapPreview} width={500} height={374} />
        </SectionFlex>
      </Section>
    </>
  )
}

export default Home
