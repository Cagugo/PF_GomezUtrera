/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useContext } from "react";
import { CartContext } from "../../context/ItemsContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CardComponent = ({ dishes }) => {
  const {addToCart} = useContext(CartContext);
  console.log(addToCart)

  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={dishes.image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {dishes.category}
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
            {dishes.title}
          </Typography>
          <Typography gutterBottom component="h5">
            $ {dishes.price} | {dishes.tipos}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            description: {dishes.description} | stock: {dishes.stock}
          </Typography>
        </CardContent>
        <Button
          onClick={()=>addToCart(dishes)}
        >
          Add to cart
        </Button>
        <Link
                to={`item/${dishes.id}`}
                style={{ textDecoration: "none" }}
                
              >
                Detalle del Taco
              </Link>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;