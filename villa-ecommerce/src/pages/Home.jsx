import { Layout } from "../components/Layout/Layout"
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

//COMPONENTS

export const Home = () => {
    const [dishes, setDishes] = useState()
    useEffect(() => {
        const getDishes = async () => {
          const q = query(collection(db, "dishes"));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setDishes(docs)
        }
        getDishes()
    },[])
  return (
    <Layout>
        {dishes.map(dish => (<ul key={dish.id}>
            <li>{dish.title}</li>
            <li><img src={dish.image} /></li>
          
        </ul>))}
    </Layout>
  )
}
