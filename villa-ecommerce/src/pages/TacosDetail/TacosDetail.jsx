import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// FIRBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardComponent from "../../components/CardComponent/CardComponent";

import "./TacosDetail.css";

const TacosDetail = () => {
  const [dishes, setDishes] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getDishes = async () => {
      const q = query(collection(db, "dishes"), where(documentId(), "==", id));
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Tacos Details</h1>
      {dishes.map((data) => {
        return <CardComponent dishes={data} key={data.id} />;
      })}
    </div>
  );
};

export default TacosDetail;
