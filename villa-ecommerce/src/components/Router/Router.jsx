import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import Shop from "../../pages/Shop/Shop";
import TacosDetail from "../../pages/TacosDetail/TacosDetail";
import TiposTacos from "../../pages/TiposTacos/TiposTacos";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/categories/:id" element={<TiposTacos />} />
        <Route path="/item/:id" element={<TacosDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
