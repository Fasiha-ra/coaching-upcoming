import React from 'react'
import { RightBarWrapper } from './RightSideBar.styles'

const CustomRightSidebar = ({children}) => {
  return (
    <RightBarWrapper>
        {children}
    </RightBarWrapper>
  )
}

export default CustomRightSidebar