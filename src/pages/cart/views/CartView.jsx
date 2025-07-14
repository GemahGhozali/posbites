import useCart from "../../../hooks/useCart";

import ProductCard from "../components/ProductCard";
import OrderSummary from "../components/OrderSummary";

export default function CartView() {
   const { cart } = useCart();

   return (
      <>
         <div className="flex flex-col gap-2 sm:gap-4 grow overflow-y-scroll custom-scrollbar">
            {cart.map((product) => (
               <ProductCard key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} quantity={product.quantity} />
            ))}
         </div>
         <OrderSummary />
      </>
   );
}
