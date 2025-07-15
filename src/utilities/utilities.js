export function formatPriceCurrency(price) {
   return new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
   }).format(price);
}

export function getCurrentDate() {
   const today = new Date();
   const day = String(today.getDate()).padStart(2, "0");
   const month = String(today.getMonth() + 1).padStart(2, "0");
   const year = today.getFullYear();

   return `${day}-${month}-${year}`;
}

export * from "./utilities";
