import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const useCartAuth = () => {
  return useContext(CartContext);
};

export default useCartAuth;
