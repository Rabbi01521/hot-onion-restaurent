import React, { useState } from "react";
import useProducts from "../../../hooks/useProducts";
import Food from "../Food/Food";

const Foods = () => {
  const [products] = useProducts();
  const [foods, setFoods] = useState("breakfast");
  const filterProducts = products.filter((food) => food.type === foods);

  // const Style = {

  // }
  return (
    <div>
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => setFoods("breakfast")}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
        >
          <span className=" p-3 ">Breakfast</span>
        </button>
        <button
          onClick={() => setFoods("lunch")}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
        >
          <span className=" p-3 ">Lunch</span>
        </button>
        <button
          onClick={() => setFoods("dinner")}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
        >
          <span className=" p-3 ">Dinner</span>
        </button>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filterProducts.map((product) => (
              <Food key={product._id} product={product}></Food>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
