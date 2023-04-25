import { Grid } from "@mui/material"
import Navbar from "../Navbar/Navbar"


export const Layout = ({children}) => {
  return (
    <Grid >
        <Navbar/>
    {children}
    </Grid>
  )
}
