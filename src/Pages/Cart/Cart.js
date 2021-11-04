import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import ReviewItem from "../ReviewItem/ReviewItem";
import CartPrice from "./CartPrice";

const Cart = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  // console.log(cart);
  const history = useHistory();

  const handleRemove = (_id) => {
    const removeItem = cart.filter((product) => product._id !== _id);
    setCart(removeItem);
    removeFromDb(_id);
  };

  const handleProceedToShipping = () => {
    history.push("/placeorder");
  };

  return (
    <div>
      {cart.length ? (
        <div className="bg-gray-900 h-full">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
              {cart.map((product) => (
                <ReviewItem
                  handleRemove={handleRemove}
                  product={product}
                  key={product.index}
                ></ReviewItem>
              ))}
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
              <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                <CartPrice cart={cart}>
                  <div className="text-center mt-6">
                    <button
                      onClick={handleProceedToShipping}
                      type="submit"
                      className="p-3 rounded-lg bg-red-600 outline-none text-white shadow justify-center focus:bg-red-700 hover:bg-red-500"
                    >
                      Place Your Order
                    </button>
                  </div>
                </CartPrice>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center my-40">
          <p>No Food Added</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
