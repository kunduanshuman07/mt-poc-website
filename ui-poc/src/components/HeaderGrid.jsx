import React from 'react'
import Grid  from '@mui/material/Grid'
import headerTextfieldprops from '../props'
import HeaderTextField from "./HeaderTextField"

const HeaderGrid = () => {
  return (
    <Grid container sx={{padding: "8px 10px 0px 10px" }}>
      {
        headerTextfieldprops.map((prop, index) => (
          <Grid item md={2.4} key={index}>
            <HeaderTextField title={prop.title} key={index} selected={prop.selected} type={prop.type} selectionData={prop.selectionMenu}/>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default HeaderGrid