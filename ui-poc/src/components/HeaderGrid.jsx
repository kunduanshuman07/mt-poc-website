import React from 'react'
import Grid from '@mui/material/Grid2';
import headerTextfieldprops from '../props'
import HeaderTextField from "./HeaderTextField"

const HeaderGrid = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }} sx={{padding: "10px"}}>
      {
        headerTextfieldprops.map((prop, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 2.4 }}>
            <HeaderTextField title={prop.title} key={index} selected={prop.selected} type={prop.type} selectionData={prop.selectionMenu}/>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default HeaderGrid