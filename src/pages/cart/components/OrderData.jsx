export default function OrderData({ data, value }) {
   return (
      <div className="flex justify-between items-center *:text-sm sm:*:text-base">
         <p>{data}</p>
         <p>{value}</p>
      </div>
   );
}
