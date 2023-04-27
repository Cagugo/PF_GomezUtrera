/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // const value = [items, setItems];

  const addToCart = (newDish) => {
    const existingDish = items.find(item => item.id === newDish.id);
    if(existingDish){
      setItems(prevState=> prevState.map(item=>{
        if(item.id === newDish.id){
          return{
            ...item,
            amount: item.amount+1
          }
        } return item
      }))
    } else{

      setItems((prevState)=>[...prevState,
        {
          id:newDish.id,
          title:newDish.title,
          price:newDish.price,
          image:newDish.image,
          amount:1

        }])
    }
  }

  const removeFromCart = (item) =>{
    const updatedCart = items.map(i =>{
      if(i.id === item.id){
        return {...i,amount:i.amount-1}
      }else{
        return i
      }
    }).filter(i => i.amount > 0)
    setItems(updatedCart)


  }

  return <CartContext.Provider value={{items,setItems,addToCart,removeFromCart}}>{children}</CartContext.Provider>;
};