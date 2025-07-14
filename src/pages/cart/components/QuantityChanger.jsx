import useCart from "../../../hooks/useCart";

export default function QuantityChanger({ productId, quantity }) {
   const { increaseProductQuantity, decreaseProductQuantity } = useCart();

   return (
      <div className="quantity-updater-btn max-md:col-start-1 md:col-span-3 size-fit flex border-2 border-gray-300 rounded-md overflow-hidden *:size-[27px] *:grid *:place-content-center *:duration-150">
         <button onClick={() => decreaseProductQuantity(productId)} className="bx bx-minus text-green-600 font-semibold hover:text-white hover:bg-green-600"></button>
         <div className="border-x-2 border-gray-300 text-sm sm:text-base">{quantity}</div>
         <button onClick={() => increaseProductQuantity(productId)} className="bx bx-plus text-green-600 font-semibold hover:text-white hover:bg-green-600"></button>
      </div>
   );
}
