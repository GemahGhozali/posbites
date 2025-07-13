import "./index.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";

export default function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
         </Routes>
      </>
   );
}
