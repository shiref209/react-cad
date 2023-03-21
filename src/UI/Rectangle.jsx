import { Box } from '@mui/material'
import { useTheme } from '@mui/system'
import React from 'react'

const Rectangle = ({color}) => {
    const theme=useTheme();
    const colorValue=theme.palette.primary[color]
    console.log(colorValue)
  return (
    <Box bgcolor={colorValue} height='20px' width='20px' borderRadius='5px'></Box>
  )
}

export default Rectangle