import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";

export default function EmptyCartView() {
   const navigate = useNavigate();

   return (
      <div className="grow flex flex-col justify-center items-center gap-2">
         <i className="bx bx-smile text-6xl"></i>
         <p>Your shopping cart is currently empty</p>
         <Button color="primary" onClick={() => navigate("/")}>
            Back To Homepage
         </Button>
      </div>
   );
}
