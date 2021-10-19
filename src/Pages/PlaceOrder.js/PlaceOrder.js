import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import CartPrice from "../Cart/CartPrice";
import ReviewItem from "../ReviewItem/ReviewItem";

const PlaceOrder = () => {
  const { user } = useAuth();
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  console.log(cart);

  const handleRemove = (_id) => {
    const removeItem = cart.filter((product) => product._id !== _id);
    setCart(removeItem);
    removeFromDb(_id);
  };

  return (
    <div className="bg-gray-200">
      <div className="leading-loose grid grid-cols-3 gap-4">
        <div className="">
          <div className="max-w-xl m-4 p-10 bg-white rounded shadow-xl ">
            <p className="text-gray-800 font-medium">Customer information</p>
            <div className="">
              <label className="block text-sm text-gray-00" for="cus_name">
                Name
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="cus_name"
                type="text"
                required="true"
                value={user.displayName}
                placeholder="Your Name"
                ariaLabel="Name"
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm text-gray-600" for="cus_email">
                Email
              </label>
              <input
                className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                value={user.email}
                placeholder="Your Email"
                ariaLabel="Email"
              />
            </div>
            <div className="mt-2">
              <label className=" block text-sm text-gray-600" for="cus_email">
                Address
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required="true"
                placeholder="Street"
                ariaLabel="Email"
              />
            </div>
            <div className="mt-2">
              <label className="hidden text-sm text-gray-600" for="cus_email">
                City
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="City"
                ariaLabel="Email"
              />
            </div>
            <div className="inline-block mt-2 w-1/2 pr-1">
              <label
                className="hidden block text-sm text-gray-600"
                for="cus_email"
              >
                Country
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Country"
                ariaLabel="Email"
              />
            </div>
            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
              <label
                className="hidden block text-sm text-gray-600"
                for="cus_email"
              >
                Zip
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Zip"
                ariaLabel="Email"
              />
            </div>
            <p className="mt-4 text-gray-800 font-medium">
              Payment information
            </p>
            <div className="">
              <label className="block text-sm text-gray-600" for="cus_name">
                Card
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                placeholder="Card Number MM/YY CVC"
                ariaLabel="Name"
              />
            </div>
            <div className="mt-4">
              <Link to="/checkout">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                  type="submit"
                >
                  Save and Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          {cart.map((product) => (
            <ReviewItem
              handleRemove={handleRemove}
              key={product.index}
              product={product}
            ></ReviewItem>
          ))}
        </div>
        <div className="">
          <CartPrice cart={cart}></CartPrice>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
