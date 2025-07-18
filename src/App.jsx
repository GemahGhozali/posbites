import "./index.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import Navbar from "./components/Navbar";
import CartProvider from "./contexts/CartProvider";

export default function App() {
   return (
      <CartProvider>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
         </Routes>
      </CartProvider>
   );
}
