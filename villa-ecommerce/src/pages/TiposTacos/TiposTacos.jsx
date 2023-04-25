import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardComponent from "../../components/CardComponent/CardComponent";

// COMPONENTS

const TiposTacos = () => {
  const [dishes, setDishes] = useState([]);

  let { tipos } = useParams();

  useEffect(() => {
    const getDishes = async () => {
      const q = query(collection(db, "dishes"), where("tipos", "==", tipos));
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
  }, [tipos]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Tacos por Tipos</h1>
      {dishes.map((data) => {
        return <CardComponent dishes={data} key={data.id} />;
      })}
    </div>
  );
};

export default TiposTacos;
