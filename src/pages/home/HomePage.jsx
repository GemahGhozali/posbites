import { useState } from "react";

import TabButton from "./components/TabButton";
import ProductCard from "./components/ProductCard";
import { Toaster } from "react-hot-toast";

import products from "../../constant/products";

export default function HomePage() {
   const [selectedTab, setSelectedTab] = useState("All Products");

   const filteredProducts = selectedTab === "All Products" ? products : products.filter((product) => product.category === selectedTab);

   return (
      <main className="max-w-7xl mx-auto pt-[114px] pb-4">
         <h1 className="text-black text-4xl sm:text-5xl font-bold text-center">See All Products</h1>

         <menu className="max-w-fit mx-auto my-5 px-3 flex gap-2 overflow-x-scroll scrollbar-hidden">
            <TabButton isActive={selectedTab === "All Products"} onSelect={() => setSelectedTab("All Products")}>
               All Products
            </TabButton>
            <TabButton isActive={selectedTab === "Asian Foods"} onSelect={() => setSelectedTab("Asian Foods")}>
               Asian Foods
            </TabButton>
            <TabButton isActive={selectedTab === "Western Foods"} onSelect={() => setSelectedTab("Western Foods")}>
               Western Foods
            </TabButton>
            <TabButton isActive={selectedTab === "Side Dishes"} onSelect={() => setSelectedTab("Side Dishes")}>
               Side Dishes
            </TabButton>
            <TabButton isActive={selectedTab === "Baverages"} onSelect={() => setSelectedTab("Baverages")}>
               Baverages
            </TabButton>
         </menu>

         <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
               <ProductCard key={product.id} id={product.id} image={product.image} name={product.name} description={product.description} price={product.price} />
            ))}
         </div>

         <Toaster position="bottom-right" />
      </main>
   );
}
