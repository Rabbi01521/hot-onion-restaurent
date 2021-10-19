import React, { createContext } from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products] = useProducts();
  const [cart] = useCart(products);
  console.log(cart);
  return <CartContext.Provider value={[cart]}>{children}</CartContext.Provider>;
};

export default CartProvider;
