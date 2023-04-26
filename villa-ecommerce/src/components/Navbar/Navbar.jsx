import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box>
      <Toolbar>
        <Link to="/">Home</Link>
        <Link to="/shop">Cart</Link>
        <Link to="/categories/1">Categories</Link>
        <Link to="/item/1">Item</Link>
      </Toolbar>
    </Box>
  );
}
