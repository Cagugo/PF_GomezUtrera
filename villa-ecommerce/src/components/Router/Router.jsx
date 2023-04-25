
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { Shop } from '../../pages/Shop/Shop'
import { Categories } from '../../pages/Categories'
import { Item } from '../../pages/Item'

export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/categories/:id" element={<Categories />} />
      <Route path="/item/:id" element={<Item />} />
      
    </Routes>
  </BrowserRouter>
  )
}
