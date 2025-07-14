import { formatPriceCurrency } from "../../../utilities/utilities";

import OrderData from "./OrderData";
import Button from "../../../components/Button";

export default function OrderSummary({ cart }) {
   const totalPurchasedItems = cart.reduce((accumulator, product) => (accumulator += product.quantity), 0);
   const totalOrderPrice = cart.reduce((accumulator, product) => (accumulator += product.price * product.quantity), 0);

   return (
      <div className="p-4 bg-green-600 text-white rounded-md">
         <div className="flex justify-between items-center">
            <h3 className="text-xl sm:text-2xl font-bold">Order Summary</h3>
            <Button color="secondary" className="max-sm:hidden">
               Checkout
            </Button>
         </div>
         <hr className="border-white my-4" />
         <div className="space-y-4">
            <OrderData data="Purchased Items" value={`${totalPurchasedItems} ${totalPurchasedItems > 1 ? "Items" : "Item"}`} />
            <OrderData data="Total Order" value={formatPriceCurrency(totalOrderPrice)} />
         </div>
         <Button color="secondary" className="w-full mt-4 sm:hidden" children="Checkout">
            Checkout
         </Button>
      </div>
   );
}
