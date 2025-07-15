import { useEffect, useState } from "react";

import CartContext from "./CartContext";

import products from "../constant/products";

export default function CartProvider({ children }) {
   const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

   useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

   function addProduct(productId) {
      const isProductExist = cart.some((product) => product.id === productId);

      if (isProductExist) return;

      const product = products.find((product) => product.id === productId);
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
   }

   function deleteProduct(productId) {
      setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
   }

   function increaseProductQuantity(productId) {
      setCart((prevCart) =>
         prevCart.map((product) => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product;
         })
      );
   }

   function decreaseProductQuantity(productId) {
      setCart((prevCart) =>
         prevCart.map((product) => {
            if (product.id === productId && product.quantity > 1) {
               return { ...product, quantity: product.quantity - 1 };
            }

            return product;
         })
      );
   }

   function clearCart() {
      setCart([]);
   }

   return <CartContext.Provider value={{ cart, addProduct, deleteProduct, clearCart, increaseProductQuantity, decreaseProductQuantity }}>{children}</CartContext.Provider>;
}
