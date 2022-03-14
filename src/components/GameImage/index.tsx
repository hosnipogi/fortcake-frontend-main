import React from 'react'
import { TokenImage as UIKitTokenImage, ImageProps } from 'fortcake-uikit-v2'

// const getImageUrlFromGame = (image: string) => {
//   return `/games/images/games/${image}`;
// }

interface TokenImageProps extends ImageProps {
  image: string
}

export const GameImage: React.FC<TokenImageProps> = ({ image, ...props }) => {
  return <UIKitTokenImage src={image} {...props} />
}
