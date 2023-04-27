import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import CardComponent from "../../components/CardComponent/CardComponent";
import { Layout } from "../../components/Layout/Layout";
import { Grid } from "@mui/material";

// COMPONENTS

const TiposTacos = () => {
  const [dishes, setDishes] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getDishes = async () => {
      const q = query(collection(db, "dishes"), where("category", "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setDishes(docs);
    };
    getDishes();
  }, [id]);

  return (
    <Layout>
      <h1>Tacos por Tipos</h1>
      <Grid sx={{display: "flex"}}>
      {dishes.map((data) => {
        return <CardComponent dishes={data} key={data.id} />;
      })}
      </Grid>
    </Layout>
  );
};

export default TiposTacos;
