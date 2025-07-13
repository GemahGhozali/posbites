import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavbarLink({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to);
   const isLinkActive = useMatch({ path: resolvedPath.pathname, end: true });

   const classes = `flex items-center gap-2 max-sm:rounded-lg max-sm:px-4 max-sm:py-3 max-sm:border duration-300 ${isLinkActive ? "text-green-600 font-semibold max-sm:bg-green-100 max-sm:border-green-400" : "text-black max-sm:bg-slate-50 max-sm:border-gray-300 max-sm:hover:bg-slate-100"}`;

   return (
      <Link to={to} className={classes} {...props}>
         {children}
      </Link>
   );
}
