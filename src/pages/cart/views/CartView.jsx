import ProductCard from "../components/ProductCard";
import OrderSummary from "../components/OrderSummary";

export default function CartView({ cart, setCart }) {
   function handleIncreaseQuantity(productId) {
      setCart((prevCart) =>
         prevCart.map((product) => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product;
         })
      );
   }

   function handleDecreaseQuantity(productId) {
      setCart((prevCart) =>
         prevCart.map((product) => {
            if (product.id === productId && product.quantity > 1) {
               return { ...product, quantity: product.quantity - 1 };
            }

            return product;
         })
      );
   }

   function handleDeleteProduct(productId) {
      setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
   }

   return (
      <>
         <div className="flex flex-col gap-2 sm:gap-4 grow overflow-y-scroll custom-scrollbar">
            {cart.map((product) => (
               <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                  onDelete={handleDeleteProduct}
                  onIncreaseQuantity={handleIncreaseQuantity}
                  onDecreaseQuantity={handleDecreaseQuantity}
               />
            ))}
         </div>
         <OrderSummary cart={cart} />
      </>
   );
}
