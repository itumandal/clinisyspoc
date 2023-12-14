
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { IHeaderProps } from './interface';
import React from 'react';
const Header:React.FC<IHeaderProps> = ({title}) => {
    const style={ display:"flex", justifyContent:"center", alignItems:"center", height:"3rem" , backgroundColor:"white", color:"black"}
  return (
    <AppBar position="static" sx={style}>
        <Typography variant="h5">
       {title}
      </Typography>
    </AppBar>
  )
}

export default Header
