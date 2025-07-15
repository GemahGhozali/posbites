import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ ref, className, children }) {
   const modalRef = useRef();

   useImperativeHandle(ref, () => {
      return {
         closeModal: () => modalRef.current.close(),
         openModal: () => modalRef.current.showModal(),
      };
   });

   const classes = `backdrop:bg-black/30 open:animate-zoom-in top-1/2 left-1/2 -translate-1/2 z-50 ${className}`;

   return createPortal(
      <dialog ref={modalRef} className={classes}>
         {children}
      </dialog>,
      document.getElementById("modal")
   );
}
