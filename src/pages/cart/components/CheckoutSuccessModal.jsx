import useCart from "../../../hooks/useCart";

import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

export default function CheckoutSuccessModal({ ref, onClose }) {
   const { clearCart } = useCart();

   function handleCloseModal() {
      onClose();
      clearCart();
   }

   return (
      <Modal ref={ref} className="p-2 sm:p-4 bg-transparent w-full max-w-100">
         <div className="bg-white border border-gray-400 rounded-xl p-4 space-y-4 text-center w-full">
            <i className="bx  bxs-check-circle text-7xl text-green-600"></i>
            <div className="space-y-2">
               <h1 className="text-xl sm:text-2xl font-bold">Checkout Success!</h1>
               <p className="text-sm sm:text-base">Your order will be proceed now!</p>
            </div>
            <Button color="primary" className="w-full" onClick={handleCloseModal}>
               Close
            </Button>
         </div>
      </Modal>
   );
}
