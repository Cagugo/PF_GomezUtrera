import { Layout } from "../../components/Layout/Layout";
import { useContext, useState } from "react";

// Firebase
import { collection, addDoc } from "firebase/firestore";

import "./Shop.css";

import TextField from "@mui/material/TextField";


import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import { db } from "../../firebase/firebase";
import { CartContext } from "../../context/ItemsContext";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const Shop = () => {
  
  const {setItems} = useContext(CartContext)
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
    setItems([])
  };

  return (
    <Layout>
      <div style={styles.containerShop}>
        <h2>Formulario de Compra</h2>
        <form className="FormContainer" onSubmit={onSubmit}>
          <TextField
            placeholder="Name"
            style={{ margin: 10, width: 400, backgroundColor: "whitesmoke" }}
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <TextField
            placeholder="Last Name"
            style={{ margin: 10, width: 400, backgroundColor: "whitesmoke" }}
            name="lastName"
            value={values.lastName}
            onChange={onChange}
          />
          <TextField
            placeholder="City"
            style={{ margin: 10, width: 400, backgroundColor: "whitesmoke" }}
            name="city"
            value={values.city}
            onChange={onChange}
          />
          <button className="btnASendAction" type="submit">
            Send
          </button>
        </form>
        {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null}
      </div>
    </Layout>
  );
};

export default Shop;
