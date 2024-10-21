import React from 'react'
import Grid from '@mui/material/Grid2';
import { headerTextfieldprops } from '../props'
import HeaderTextField from "../components/HeaderTextField"

const Header = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }} sx={{padding: "0px 10px", display: "flex", background: "#f9f9f9" }}>
      {
        headerTextfieldprops.map((prop, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: prop.type === 1 || prop.type === 2 ? 2 : 6 }} sx={{ margin: "auto" }}>
            <HeaderTextField title={prop.title} key={index} type={prop.type} selectionData={prop.selectionMenu} defaultValue={(prop.selectionMenu && prop.selectionMenu.length > 0) ? prop.selectionMenu[prop.selectionMenu.length - 1].value : ""} value={prop.value} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Header