import { formatPriceCurrency } from "../../../utilities/utilities";
import useCart from "../../../hooks/useCart";

export default function ProductCard({ id, image, name, description, price }) {
   const { cart, addProduct } = useCart();

   const isProductExist = cart.some((product) => product.id === id);

   return (
      <div className="flex md:flex-col bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
         <img src={image} alt={name} className="aspect-square h-[108px] sm:h-40 md:h-auto" />
         <div className="size-full p-2 sm:p-3 flex flex-col justify-between md:gap-3">
            <div className="space-y-1">
               <h4 className="font-bold text-lg sm:text-xl line-clamp-1">{name}</h4>
               <p className="text-sm sm:text-base line-clamp-1 sm:line-clamp-2">{description}</p>
            </div>
            <div className="w-full flex justify-between items-end">
               <h6 className="text-green-600 font-semibold text-base sm:text-lg">{formatPriceCurrency(price)}</h6>
               <button onClick={() => addProduct(id)} className={`size-8 sm:size-10 grid place-content-center rounded-md duration-300 ${isProductExist ? "bg-slate-100 inset-ring inset-ring-gray-300" : "bg-green-600 hover:bg-green-700"}`}>
                  {isProductExist ? <i className="bx bxs-check-circle text-green-600 text-xl sm:text-2xl"></i> : <i className="bx bxs-cart-plus text-white text-lg sm:text-2xl"></i>}
               </button>
            </div>
         </div>
      </div>
   );
}
