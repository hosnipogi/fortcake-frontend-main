import React from 'react'
import { ArrowForwardIcon, Button, ButtonProps } from 'fortcake-uikit-v2'

const NextStepButton: React.FC<ButtonProps> = (props) => {
  return <Button endIcon={<ArrowForwardIcon color="currentColor" />} {...props} />
}

export default NextStepButton
