import React from 'react'
import { Flex, Skeleton, useMatchBreakpoints } from 'fortcake-uikit-v2'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 16px;
  padding: 24px 8px 24px 16px;
  border-radius: 16px;
  filter: ${({ theme }) => theme.card.dropShadow};
  width: 100%;
  background: ${({ theme }) => theme.card.background};
`
const LoadingDesktop: React.FC = () => {
  return (
    <Flex width="100%">
      <Skeleton variant="circle" width={90} height={90} />
      <Flex ml="18px" flexDirection="column" width="70%">
        <Skeleton width={140} height={5} />
        <Skeleton width="100%" height={30} mt={2} />
        <Skeleton width={200} height={30} mt={2} />
      </Flex>
    </Flex>
  )
}

const LoadingMobile: React.FC = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center">
      <Skeleton variant="circle" width={90} height={90} mr="18px" mb="12px" />
      <Flex ml="18px" width="100%" flexDirection="column">
        <Skeleton width={140} height={5} />
        <Skeleton width="90%" height={30} mt={2} />
        <Skeleton width={200} height={30} mt={2} />
      </Flex>
    </Flex>
  )
}

const LoadingSkeleton: React.FC = () => {
  const { isMobile } = useMatchBreakpoints()
  return <Wrapper>{isMobile ? <LoadingMobile /> : <LoadingDesktop />}</Wrapper>
}

export default LoadingSkeleton
