import { formatPriceCurrency } from "../../../utilities/utilities";

import QuantityChanger from "./QuantityChanger";

export default function ProductCard({ id, image, name, price, quantity, onDelete, onIncreaseQuantity, onDecreaseQuantity }) {
   return (
      <div className="p-2 me-2 sm:me-4 bg-white border-2 border-gray-300 shadow-md rounded-md grid grid-cols-[auto_1fr] gap-2 md:gap-4">
         <img src={image} alt={name} className="aspect-square h-[90px] sm:h-24 bg-slate-300 rounded-sm" />

         <div className="grid grid-flow-col grid-cols-2 max-md:grid-rows-[1fr_auto] md:grid-cols-12 md:items-center md:justify-items-center">
            <div className="max-md:col-start-1 col-span-2 md:col-span-5 justify-self-start">
               <h4 className="text-lg sm:text-xl font-semibold line-clamp-1">{name}</h4>
               <p className="text-sm sm:text-base">{formatPriceCurrency(price)}</p>
            </div>
            <QuantityChanger productId={id} quantity={quantity} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity} />
            <span className="max-md:hidden md:col-span-3 font-semibold text-green-600">{formatPriceCurrency(price * quantity)}</span>
            <button onClick={() => onDelete(id)} className="bx bx-trash max-md:justify-self-end md:col-span-1 bg-green-600 text-white size-[30px] rounded-md grid place-content-center duration-150 hover:bg-green-700"></button>
         </div>

         <hr className="col-span-2 border border-gray-300 md:hidden" />

         <div className="col-span-2 flex justify-between md:hidden">
            <p className="text-sm sm:text-base font-semibold">Total :</p>
            <p className="text-sm sm:text-base font-semibold text-green-600">{formatPriceCurrency(price * quantity)}</p>
         </div>
      </div>
   );
}
