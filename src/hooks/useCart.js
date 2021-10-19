import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      //   console.log(savedCart);
      const storedCart = [];
      for (const _id in savedCart) {
        console.log(_id);
        const addedProduct = products.find((product) => product._id === _id);
        if (addedProduct) {
          const quantity = savedCart[_id];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  console.log(cart);
  return [cart, setCart];
};

export default useCart;
