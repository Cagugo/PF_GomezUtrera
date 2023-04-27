/* eslint-disable no-unused-vars */
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <Box>
//       <Toolbar>
//         <Link to="/">Home</Link>
//         <Link to="/shop">Cart</Link>
//         <Link to="/categories/1">Categories</Link>
//         <Link to="/item/1">Item</Link>
//       </Toolbar>
//     </Box>
//   );
// }

import React, { useContext, useState } from "react";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import MenuTiposTacos from "../MenuTiposTacos/MenuTiposTacos";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { CartContext } from "../../context/ItemsContext";
import { CartDrawer } from "../CartDrawer/CartDrawer";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  purchaseButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
};

const NavbarNavigation = () => {
  const {items} = useContext(CartContext);
  
  const [openDrawer,setOpenDrawer]=useState(false)

  const handleClickCart = () =>{
    setOpenDrawer(true)
  }

  const handleCloseDrawer = () => {
    setOpenDrawer(false)
  }

  return (
    <>
    <AppBar position="static" className="NavbarNavigation">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="NavbarContainer">
          <Link to="/" style={styles.linkButton}>
            Home
          </Link>
          <MenuTiposTacos />
          <Link to="/TiposTacos" style={styles.linkButton}>
            Tipos de Tacos
          </Link>
        
          <Button onClick={handleClickCart} style={styles.linkButton}>
            <i className="fa-solid fa-cart-shopping"></i>
            {items.length}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
    <CartDrawer open={openDrawer} onClose={handleCloseDrawer} /></> 
  );
};
export default NavbarNavigation;
