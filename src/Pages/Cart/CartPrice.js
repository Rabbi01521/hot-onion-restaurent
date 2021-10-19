import React from "react";

const CartPrice = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  return (
    <div>
      {/* <!-- Total Item --> */}
      <div className="flex justify-center items-center text-center">
        <div className="text-xl font-semibold">
          <p>Total Item</p>
          <p className="text-5xl">{totalQuantity}</p>
        </div>
      </div>
      {/* <!-- End Total Item --> */}

      <div className=" py-4 px-4  rounded-lg my-4 mx-4">
        {/* <!-- Total Price --> */}
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Price</p>
            <p className="text-5xl">${total.toFixed(2)}</p>
          </div>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default CartPrice;
