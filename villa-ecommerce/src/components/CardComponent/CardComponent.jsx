import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CardComponent = ({ dishes }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={dishes.image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dishes.category}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {dishes.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {dishes.price} | {dishes.tipos}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {dishes.description} | stock: {dishes.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
