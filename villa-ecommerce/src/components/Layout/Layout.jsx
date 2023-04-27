/* eslint-disable react/prop-types */
import { Box, Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Greeting from "../Greeting/Greeting";

export const Layout = ({ children }) => {
  return (
    <Grid
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    > 
      <Header />
      <Navbar />
      <Box
        sx={{
          flex: "1",
          padding: "1rem",
          border: "8px solid rgba(9, 121, 10, 1)",
          backgroundColor: "black"
          
        }}
      >
        {children}
      </Box>
      
    
      <footer>
        <Greeting />
      </footer>
  
    </Grid>
  );
};
