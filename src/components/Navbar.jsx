import { useState } from "react";

import POSBitesLogo from "./POSBitesLogo";
import NavbarLink from "./NavbarLink";

function HamburgerMenu({ isOpen, ...props }) {
   return (
      <button {...props} className="sm:hidden flex flex-col justify-center items-center">
         <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
         <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
         <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
      </button>
   );
}

export default function Navbar() {
   const [navbarCollapsedOpen, setNavbarCollapsedOpen] = useState(false);

   function handleToggleNavbarCollapsed() {
      setNavbarCollapsedOpen((prev) => !prev);
   }

   const navbarCollapsedClasses = `flex gap-8 max-sm:absolute max-sm:bg-slate-50 max-sm:flex-col max-sm:right-0 max-sm:top-full max-sm:w-full max-sm:px-4 max-sm:pb-4 max-sm:border-b max-sm:border-b-gray-300 max-sm:gap-4 max-sm:rounded-b-2xl duration-300 ${navbarCollapsedOpen ? "max-sm:navbar-open" : "max-sm:navbar-close"}`;

   return (
      <nav className="bg-slate-50 border-b border-b-gray-300 fixed w-full top-0">
         <div className="p-4 flex justify-between items-center max-w-7xl mx-auto relative">
            <POSBitesLogo />

            <HamburgerMenu isOpen={navbarCollapsedOpen} onClick={handleToggleNavbarCollapsed} />

            <menu className={navbarCollapsedClasses}>
               <NavbarLink to="/" onClick={() => setNavbarCollapsedOpen(false)}>
                  <i className="bx bx-home-alt-2 text-2xl"></i>
                  <span>Home</span>
               </NavbarLink>
               <NavbarLink to="/cart" onClick={() => setNavbarCollapsedOpen(false)}>
                  <i className="bx bx-cart text-2xl"></i>
                  <span>Shopping Cart</span>
               </NavbarLink>
            </menu>
         </div>
      </nav>
   );
}
