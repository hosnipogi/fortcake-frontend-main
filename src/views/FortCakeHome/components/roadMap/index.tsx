import React from 'react'
import { useMatchBreakpoints, Image } from 'fortcake-uikit-v2'
import { Hq } from './svgs'
import {
  Container,
  MainWrapper,
  BorderBox,
  BorderBox1,
  FlexListContainer,
  FlexListContainer1,
  MainHq,
  Line1,
  Line2,
  RoadMapInProgress,
  RoadMapDone,
  RoadMapFuture,
} from './styles'

const RoadMap = () => {
  const { isDesktop } = useMatchBreakpoints()

  if (!isDesktop) {
    return (
      <Container>
        <MainWrapper justifyContent="center">
          <MainHq>
            <img src={Hq} alt="asdf" width={280} height={280} />
          </MainHq>
        </MainWrapper>
        <MainWrapper>
          <Line2 />
        </MainWrapper>
        <MainWrapper className="first">
          <FlexListContainer>
            <RoadMapDone title="Q4 2021" text="Finish platform specifications" />
            <RoadMapDone title="Q4 2021" text="Mobile and Desktop version finished" />
            <RoadMapDone title="Q4 2021" text="Partnerships with blockchain games" />
          </FlexListContainer>
        </MainWrapper>
        <MainWrapper className="second">
          <FlexListContainer flexDirection="row-reverse">
            <RoadMapDone title="Q1 2022" text="Launch on blockchain" />
            <RoadMapDone title="Q1 2022" text="Begin user acquisition campaigns" />
            <RoadMapDone title="Q1 2022" text="Launch growth team phase 1" />
          </FlexListContainer>
        </MainWrapper>
        <MainWrapper className="third">
          <FlexListContainer>
            <RoadMapDone title="Q2 2022" text="Live feature launch" />
            <RoadMapInProgress title="In Progress" text="Community outreach program" />
            <RoadMapInProgress title="Q3 2022" text="Official platform launch" />
          </FlexListContainer>
        </MainWrapper>
        <MainWrapper className="fourth">
          <FlexListContainer flexDirection="row-reverse">
            <RoadMapInProgress title="Q3 2022" text="Start of marketing campaigns" />
            <RoadMapInProgress title="Q3 2022" text="Influencer program launch" />
            <RoadMapInProgress title="Q3 2022" text="Community/ Application adjustments" />
          </FlexListContainer>
        </MainWrapper>
        <MainWrapper className="fifth">
          <FlexListContainer>
            <RoadMapInProgress title="Q3 2022" text="Growth team phase 2" />
            <RoadMapFuture title="Q4 2022" text="Exchange listing" />
            <RoadMapFuture title="Q4 2022" text="New features release #1" />
          </FlexListContainer>
        </MainWrapper>
        <MainWrapper className="sixth">
          <FlexListContainer className="hideExtendedShadow" flexDirection="row-reverse">
            <RoadMapFuture title="Q1 2023" text="Major exchange listing" />
            <RoadMapFuture title="Q1 2023" text="New features release #2" />
          </FlexListContainer>
        </MainWrapper>
      </Container>
    )
  }

  return (
    <Container>
      <MainHq>
        <img src={Hq} alt="asdf" width={210} height={210} />
        {/* <Hq height={210} width={210} /> */}
        <Line1 />
      </MainHq>
      {/* Q1 */}
      <MainWrapper>
        <FlexListContainer1>
          <RoadMapDone title="Q4 2021" text="Finish platform specifications" />
          <RoadMapDone title="Q4 2021" text="Mobile version finished" />
          <RoadMapDone title="Q4 2021" text="Desktop version finished" />
          <RoadMapDone title="Q4 2021" text="Partnerships with blockchain games" />
          <BorderBox1 className="q1" />
        </FlexListContainer1>
      </MainWrapper>
      {/* Q2 */}
      <MainWrapper>
        <FlexListContainer flexDirection="row-reverse">
          <RoadMapDone title="Q1 2022" text="Launch on blockchain" />
          <RoadMapDone title="Q1 2022" text="Begin user acquisition campaigns" />
          <RoadMapDone title="Q1 2022" text="Launch growth team phase 1" />
          <RoadMapDone title="Q2 2022" text="Live feature launch" />
          <RoadMapInProgress title="In Progress" text="Community outreach program" />
        </FlexListContainer>
      </MainWrapper>
      {/* Q3 */}
      <MainWrapper>
        <BorderBox className="q3" />
        <FlexListContainer>
          <RoadMapInProgress title="Q3 2022" text="Official platform launch" />
          <RoadMapInProgress title="Q3 2022" text="Start of marketing campaigns" />
          <RoadMapInProgress title="Q3 2022" text="Influencer program launch" />
          <RoadMapInProgress title="Q3 2022" text="Community/ Application adjustments" />
          <RoadMapInProgress title="Q3 2022" text="Growth team phase 2" />
        </FlexListContainer>
      </MainWrapper>
      {/* Q4 */}
      <MainWrapper className="lastWrapper">
        <FlexListContainer className="hideExtendedShadow" flexDirection="row-reverse">
          <RoadMapFuture title="Q4 2022" text="Exchange listing" />
          <RoadMapFuture title="Q4 2022" text="New features release #1" />
          <RoadMapFuture title="Q1 2023" text="Major exchange listing" />
          <RoadMapFuture className="last" title="Q1 2023" text="New features release #2" />
        </FlexListContainer>
        <BorderBox className="q4" />
      </MainWrapper>
    </Container>
  )
}

export default RoadMap
