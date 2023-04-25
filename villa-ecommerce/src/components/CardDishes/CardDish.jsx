
import React, { useState, useEffect } from "react";

import CardComponent from "../CardComponent/CardComponent";
import { Link } from "react-router-dom";

import "./CardDish.css";
import Spinner from "../Spinner/Spinner";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CardDish = () => {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDishes = async () => {
      const q = query(collection(db, "dishes"));
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
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="CardListContainer">
          {dishes.map((data) => {
            return (
              <Link
                to={`details/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <CardComponent dishes={data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardDish;