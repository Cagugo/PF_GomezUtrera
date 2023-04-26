import { Box, Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";

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
      <Navbar />
      <Box
        sx={{
          flex: "1",
          padding: "1rem",
          border: "1px solid red",
        }}
      >
        {children}
      </Box>

      <footer>
        <h1>Este es mi footer</h1>
      </footer>
    </Grid>
  );
};
