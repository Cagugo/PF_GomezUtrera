import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";


export const Item = () => {


    let { id } = useParams();
  return (
    <Layout>Item {id}</Layout>
  )
}
