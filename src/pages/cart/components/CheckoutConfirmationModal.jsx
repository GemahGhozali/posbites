import useCart from "../../../hooks/useCart";

import { formatPriceCurrency } from "../../../utilities/utilities";

import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import POSBitesLogo from "../../../components/POSBitesLogo";

function TableOrder() {
   const { cart } = useCart();

   return (
      <div className="h-80 w-full overflow-y-auto border-y border-y-gray-300">
         <table className="w-full text-left text-sm sm:text-base">
            <thead className="sticky top-0 z-10 bg-slate-100">
               <tr className="*:py-2">
                  <th className="px-4">Qty</th>
                  <th>Product</th>
                  <th>Total</th>
               </tr>
            </thead>
            <tbody>
               {cart.map((product) => (
                  <tr key={product.id} className="*:py-2">
                     <td className="px-4">{product.quantity}x</td>
                     <td>{product.name}</td>
                     <td>{formatPriceCurrency(product.price * product.quantity)}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default function CheckoutConfirmationModal({ ref, onCancel, onConfirm }) {
   const { cart } = useCart();

   const totalOrderPrice = cart.reduce((accumulator, product) => (accumulator += product.price * product.quantity), 0);

   return (
      <Modal ref={ref} className="p-2 sm:p-4 bg-transparent w-full max-w-130">
         <div className="bg-white border border-gray-300 rounded-xl">
            <div className="flex justify-center py-4">
               <POSBitesLogo />
            </div>
            <TableOrder />
            <div className="p-4 space-y-4">
               <div className="flex justify-between">
                  <h1 className="font-semibold text-lg sm:text-xl">Total Price :</h1>
                  <h1 className="font-semibold text-lg sm:text-xl text-green-600">{formatPriceCurrency(totalOrderPrice)}</h1>
               </div>
               <div className=" max-sm:flex-col flex gap-4 *:w-full">
                  <Button color="secondary" className="max-sm:order-1" onClick={onCancel}>
                     Cancel
                  </Button>
                  <Button color="primary" onClick={onConfirm}>
                     Confirm Order
                  </Button>
               </div>
            </div>
         </div>
      </Modal>
   );
}
