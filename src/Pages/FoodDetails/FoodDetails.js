import { ShoppingCartIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useProducts from "../../hooks/useProducts";
import {
  addToDb,
  getStoredCart,
  removeFromDb,
  SubsToDb,
} from "../../utilities/fakedb";

const FoodDetails = () => {
  const { foodId } = useParams();
  const [products] = useProducts();
  const [cart, setCart] = useState([]);
  // const [quantity, setQuantity] = useState(0);
  // const [state, setSatate] = useState(0);
  // console.log(foodId);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
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

  // useEffect(() => {
  //   const getData = JSON.parse(localStorage.getItem("food_cart"));
  //   let initial = 0;
  //   for (const data in getData) {
  //     initial = initial + parseFloat(getData[data]);
  //   }
  //   setQuantity(initial);
  // }, [state]);

  const findProducts = products?.find(
    (food) => food.index === parseInt(foodId)
  );
  // console.log(findProducts);

  const handleAddToCart = (food) => {
    // console.log(food);
    const exists = cart.find((pd) => food._id === pd._id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => food._id !== pd._id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    } else {
      food.quantity = 1;
      newCart = [...cart, food];
    }
    setCart(newCart);
    // save to local storage
    addToDb(food._id);
    // setSatate(state + 1);
  };

  const handleSubsToCart = (food) => {
    // console.log(food);
    const exists = cart.find((pd) => food._id === pd._id);
    let newCart = [];
    if (exists && exists.quantity >= 1) {
      const rest = cart.filter((pd) => food._id !== pd._id);
      exists.quantity -= 1;
      newCart = [...rest, exists];
      if (exists.quantity === 0) {
        removeFromDb(exists._id);
      }
    } else {
    }
    setCart(newCart);
    // save to local storage
    SubsToDb(food._id);
    // setSatate(state - 1);
  };

  return (
    <div>
      <section className="relative pt-12 bg-blueGray-50 my-8">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={findProducts?.picture}
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold">{findProducts?.name}</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                {findProducts?.about}
              </p>
              <h3 className="text-3xl font-semibold">
                Price: $
                {findProducts?.quantity
                  ? (findProducts?.price * findProducts?.quantity).toFixed(2)
                  : findProducts?.price}
              </h3>
              <div className="text-lg bg-white shadow-lg rounded-full inline-block px-4 py-4">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button
                    onClick={() => handleSubsToCart(findProducts)}
                    className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p> {findProducts?.quantity ? findProducts?.quantity : 0} </p>
                  <button
                    onClick={() => handleAddToCart(findProducts)}
                    className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(findProducts)}
              className=" flex justify-center items-center my-3 bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-white py-2 px-8 border border-red-500 hover:border-transparent rounded"
            >
              <ShoppingCartIcon className="w-5 mr-2" /> Add
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodDetails;
