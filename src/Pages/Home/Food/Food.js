import React from "react";
import { Link } from "react-router-dom";

const Food = ({ product }) => {
  const { index, name, picture, price } = product;
  return (
    <div>
      <div key={product._id} className="group relative">
        <div
          className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
          style={{ height: "400px" }}
        >
          <img
            src={picture}
            alt="images"
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link to={`/food/${index}`}>
                <span aria-hidden="true" className="absolute inset-0 mx-4" />
                {name}
              </Link>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Food;
