import React from 'react'
import styled from 'styled-components'
import { Heading as PancakeHeading, Image, Flex, ImageProps, Link, LinkExternal } from 'fortcake-uikit-v2'

export const Heading = styled(PancakeHeading)<{ override?: boolean }>`
  color: ${({ theme, override }) => (override ? theme.colors.text : theme.colors.secondary)};
`

export const Section = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin-inline: auto;
  min-height: 60vh;

  &.featuresSection {
    justify-content: space-evenly;
    padding: 0;
    margin-bottom: 20px;
    h4 {
      line-height: 1.5;
    }
  }

  &.landingSection {
    justify-content: flex-end;
    padding: 8vh 0;
    min-height: calc(100vh - 80px);
    h4 {
      line-height: 1.5;
    }
    .socialLinks {
      width: 100%;
      margin: 6vh 0;
    }
    .cta {
      width: 100%;
      justify-content: space-evenly;
    }
  }

  &.participateSection {
    min-height: 50vh;
    padding-top: 0;
    justify-content: flex-start;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 36px 20px;
    &.landingSection {
      .socialLinks {
        width: 75%;
        align-self: flex-start;
      }
      .cta {
        justify-content: flex-start;
      }
    }
    &.featuresSection {
      margin-bottom: 0;
    }
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 36px 0;
  }
`

export const SectionFlex = styled(Flex)`
  max-width: 1200px;
  align-items: center;
  justify-content: space-evenly;
  .imgHideOnMobile {
    display: none;
  }
  .imgShowOnMobile {
    ${({ theme }) => theme.mediaQueries.md} {
      display: none;
    }
  }
  &.address {
    min-height: 21vh;
    align-items: flex-end;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    > a {
      justify-content: center;
      &:first-child {
        margin-top: 40px;
      }
      &:not(:last-child) {
        margin-bottom: 40px;
      }
      ${({ theme }) => theme.mediaQueries.md} {
        &:first-child {
          margin-top: 0;
        }
        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
    }
    ${({ theme }) => theme.mediaQueries.md} {
      flex-direction: row;
    }
  }
  &.features {
    flex-direction: column;
    svg {
      margin-bottom: 20px;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      flex-direction: row;
    }
  }
  &.participate {
    flex-direction: column;
    margin: 60px 0 40px;
    h2 {
      margin-bottom: 10px;
      text-align: left;
    }
    h4 {
      font-weight: 400;
    }
    h2,
    h4 {
      width: 100%;
      line-height: 1.5;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      max-width: 55%;
      h2,
      h4 {
        text-align: center;
      }
    }
  }
  &.tokenomics {
    flex-direction: column;
    max-width: 100%;
    &.reversed {
      flex-direction: column-reverse;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      flex-direction: row;
      &.reversed {
        flex-direction: row;
      }
    }
  }
  &.grid {
    > div {
      margin-bottom: 40px;
      ${({ theme }) => theme.mediaQueries.md} {
        display: flex;
        flex-direction: column;
        flex-basis: 50%;
      }
      align-items: center;
      > h2 {
        text-align: start;
        align-self: start;
        margin-bottom: 12px;
      }
    }
  }
  &.small {
    > div:first-child {
      max-width: 360px;
      max-height: 360px;
      margin: -40px auto 40px;
      ${({ theme }) => theme.mediaQueries.sm} {
        max-width: 460px;
        max-height: 460px;
      }
    }
    > div:last-child {
      width: 100%;
    }
  }
`

export const PageHeader = styled.div`
  padding: 0 20px;
  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 0;
  }
`

export const Features = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  > div {
    margin-bottom: 20px;
  }
`

export const ListWrapper = styled.ul`
  text-align: start;
  padding: 0;
`

export const ListItems = styled.li`
  list-style-type: none;
  margin-bottom: 20px;
`

export const SocialLink = styled(Link)`
  width: 100%;
  justify-content: space-evenly;
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: flex-start;
  }
`

export const ExternalLink = styled(LinkExternal)`
  display: inline-flex;
`

export const LazyImage: React.FC<ImageProps> = ({ height, width, src, className, ...props }) => (
  <Image loading="lazy" height={height} width={width} src={src} className={className} {...props} />
)
