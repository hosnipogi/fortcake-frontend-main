import React from 'react'
import styled, { keyframes } from 'styled-components'
// import { Image } from 'fortcake-uikit-v2'
import Page from '../Layout/Page'
// import Cake from '../../assets/images/logo/logo_icon.png'
import Cake from '../../assets/images/logo/svg/logo_icon'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const float = keyframes`
	0% {
		transform: translatey(0px);
		opacity: 0.3;
	}
	50% {
		transform: translatey(20px);
    opacity: 1;
	}
	100% {
		transform: translatey(0px);
    opacity: 0.3;
	} 
`

const CakeImage: React.FC<{ className?: string }> = ({ className }) => (
  <Cake className={className} width={200} height={157} />
  // <Image src={Cake} width={200} height={157} className={className} />
)

const FloatingCake = styled(CakeImage)`
  animation: ${float} 3s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <FloatingCake />
    </Wrapper>
  )
}

export default PageLoader
