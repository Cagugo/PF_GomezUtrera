
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/categories/1">Categories</Link>
        <Link to="/item/1">Item</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
