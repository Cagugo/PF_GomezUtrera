import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const MenuTiposTacos = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "lowercase",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "red",
      fontSize: 18,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.upperText}>Menu</span>Tacos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/Menu-tacos/CARNE" style={styles.link}>
            CARNE
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Menu-tacos/POLLO" style={styles.link}>
            POLLO
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Menu-tacos/PESCADO" style={styles.link}>
            PESCADO
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Menu-tacos/CERDO" style={styles.link}>
            CERDO
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuTiposTacos;
