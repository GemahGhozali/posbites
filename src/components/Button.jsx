export default function Button({ color = "primary", className, children, ...props }) {
   const buttonColors = {
      primary: "bg-green-600 text-white hover:bg-green-700",
      secondary: "bg-slate-100 text-green-600 hover:bg-slate-200",
   };

   const classes = `px-4 py-2 text-sm sm:text-base font-semibold rounded-md duration-300 ${buttonColors[color]} ${className}`;

   return (
      <button className={classes} {...props}>
         {children}
      </button>
   );
}
