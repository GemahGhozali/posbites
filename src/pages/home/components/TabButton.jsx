export default function TabButton({ isActive, onSelect, children }) {
   const classes = `border-2 px-6 py-2 rounded-3xl shrink-0 duration-300 ${isActive ? "bg-green-600 text-white font-semibold border-green-700" : "bg-white text-black border-gray-300 hover:bg-slate-100"}`;

   return (
      <button className={classes} type="button" onClick={onSelect}>
         {children}
      </button>
   );
}
