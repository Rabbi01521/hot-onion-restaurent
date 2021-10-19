import React from "react";

const ReviewItem = (props) => {
  const { _id, name, price, quantity } = props.product;
  const { handleRemove } = props;
  //   console.log(product);
  return (
    <div>
      {/* <!-- component --> */}

      <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div className="flex justify-between px-4 items-center">
          <div className="text-lg font-semibold">
            <p>{name}</p>
            <p className="text-gray-400 text-base">${price}</p>
            <p className="text-gray-400 text-base">Quantity: {quantity}</p>
          </div>
          <div className="text-lg font-semibold">
            <button
              onClick={() => handleRemove(_id)}
              className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Total Item --> */}
      {/* <div className="flex justify-center items-center text-center">
                <div className="text-xl font-semibold">
                  <p>Total Item</p>
                  <p className="text-5xl">{product.quantity}</p>
                </div>
              </div> */}
      {/* <!-- End Total Item --> */}
      {/* </div> */}
      {/* <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4"> */}
      {/* <!-- Total Price --> */}
      {/* <div className="flex justify-center items-center text-center">
                <div className="text-xl font-semibold">
                  <p>Total Price</p>
                  <p className="text-5xl">0</p>
                </div>
              </div> */}
      {/* <!-- End Total PRice --> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default ReviewItem;
