import { useState } from "react";

import CartView from "./views/CartView";
import EmptyCartView from "./views/EmptyCartView";

export default function CartPage() {
   const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

   localStorage.setItem("cart", JSON.stringify(cart));

   return (
      <main className="max-w-7xl mx-auto pt-[75px] md:px-4 md:pb-10 md:pt-[114px] h-screen min-h-[550px]">
         <div className="h-full p-2 sm:p-4 bg-slate-50 md:border-gray-300 md:border-2 shadow-xl md:rounded-2xl flex flex-col gap-2 sm:gap-4">
            {cart.length === 0 ? <EmptyCartView /> : <CartView cart={cart} setCart={setCart} />}
         </div>
      </main>
   );
}
