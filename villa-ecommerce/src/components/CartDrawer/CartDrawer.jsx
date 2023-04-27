/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Drawer from '@mui/material/Drawer'
import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import { CartContext } from "../../context/ItemsContext";
import { Link } from "react-router-dom";





export const CartDrawer = ({open,onClose}) => {
    const {items,addToCart,removeFromCart}= useContext(CartContext)



    

    const tacosList = (
        <Box sx={{width:'40rem'}}
        >
            <List>
                {
                    items.map((item)=>{
                    return (<ListItem key={item.id}>
                            <img src={item.image}/>
                            <ListItemText primary={`${item.title}  ${item.amount} x ${item.price}`}/>
                            <Button onClick={()=>  addToCart(item)}>+</Button>
                            <Button onClick={()=> removeFromCart(item)}>-</Button>
                        </ListItem>)
                        
                    })
                }
                

            </List>
            <Link to="/shop">
            Comprar
          </Link>

        </Box>
    )

    
  return (


    <Drawer anchor="right" open={open} onClose={onClose}>{tacosList}</Drawer>

    
  )
}