import GoogleMapReact from "google-map-react";
import React from "react";
import delivery from "../../images/Image/Group 1151.png";
import head from "../../images/Image/Group 1152.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Checkout = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div>
      <div>
        <div className="flex flex-col items-center md:flex-row ">
          {/* // Important! Always set the container height explicitly */}
          <div
            className="my-10 mx-4 h-3/6 w-6/12"
            style={{ height: "80vh", width: "50%" }}
          >
            <GoogleMapReact
              className="rounded-2xl"
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
          <div class="max-w-md mx-auto my-10 bg-gray-300 p-5 rounded-md shadow-sm">
            <div class="text-center">
              <p class="text-gray-400 dark:text-gray-400">
                <img src={delivery} alt="" className="w-28" />
              </p>
            </div>
            <div class="m-7">
              <div>
                <div class="mb-6">
                  <div class=" flex flex-col justify-center">
                    <div class=" sm:max-w-xl sm:mx-auto sm:px-0">
                      <div class="relative text-gray-700 antialiased text-sm font-semibold">
                        {/* <!-- Vertical bar running through middle --> */}
                        <div class="hidden sm:block w-1 bg-red-300 absolute h-full left-0 transform -translate-x-1/2"></div>

                        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                        {/* <div class="mt-6 sm:mt-0 sm:mb-12">
                          <div class="flex flex-col sm:flex-row items-center">
                            <div class="flex justify-start w-full mx-auto items-center">
                              <div class="w-full sm:w-1/2 sm:pr-8">
                                <div class="p-4 bg-white rounded shadow">
                                  Now this is a story all about how,
                                </div>
                              </div>
                            </div>
                            <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                              </svg>
                            </div>
                          </div>
                        </div> */}

                        {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                        <div class="mt-6 sm:mt-0 sm:mb-12">
                          <div class="flex flex-col sm:flex-row items-center">
                            <div class="flex justify-end w-full mx-auto items-center">
                              <div class="w-full sm:w-full ml-8">
                                <p>Your Address</p>
                                <p>107 Rd No 9</p>
                              </div>
                            </div>
                            <div class="rounded-full bg-red-400 border-white border-4 w-8 h-8 absolute left-0 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                          </div>
                        </div>

                        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                        {/* <div class="mt-6 sm:mt-0 sm:mb-12">
                          <div class="flex flex-col sm:flex-row items-center">
                            <div class="flex justify-start w-full mx-auto items-center">
                              <div class="w-full sm:w-1/2 sm:pr-8">
                                <div class="p-4 bg-white rounded shadow">
                                  And I'd like to take a minute, just sit right
                                  there,
                                </div>
                              </div>
                            </div>
                            <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div> */}

                        {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                        <div class="sm:mt-0">
                          <div class="flex flex-col sm:flex-row items-center">
                            <div class="flex justify-end w-full mx-auto items-center">
                              <div class="w-full sm:w-full ml-8">
                                <p className="">Shop Address</p>
                                <p>Gulshan Plaza Restaura GPR</p>
                              </div>
                            </div>
                            <div class="rounded-full bg-red-400 border-white border-4 w-8 h-8 absolute left-0 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-6">
                  <h1 className="text-4xl mb-2">9:30</h1>
                  <p className="text-sm">Estimated delivery time</p>
                </div>
                <div class="mb-6 bg-white px-2 py-2 rounded-2xl flex items-center">
                  <img
                    src={head}
                    alt=""
                    className=" h-12 w-12 rounded-full mr-5"
                  />
                  <div>
                    <h2 className="text-sm">Hamim</h2>
                    <p className=" text-base">Your Raider</p>
                  </div>
                </div>
                <div class="mb-6">
                  <button
                    type="submit"
                    class="w-full px-3 py-4 text-white bg-red-500 rounded-md focus:bg-red-600 focus:outline-none"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container p-12 mx-auto">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div class="flex flex-col md:w-full">
            <h2 class="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form class="justify-center w-full mx-auto" method="post" action>
              <div class="">
                <div class="space-x-0 lg:flex lg:space-x-4">
                  <div class="w-full lg:w-1/2">
                    <label
                      for="firstName"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div class="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Email"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Email"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Address"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
                <div class="space-x-0 lg:flex lg:space-x-4">
                  <div class="w-full lg:w-1/2">
                    <label
                      for="city"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="City"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div class="w-full lg:w-1/2 ">
                    <label
                      for="postcode"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div class="flex items-center mt-4">
                  <label class="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                    />
                    <span class="ml-2">
                      Save this information for next time
                    </span>
                  </label>
                </div>
                <div class="relative pt-3 xl:pt-6">
                  <label
                    for="note"
                    class="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    {" "}
                    Notes (Optional)
                  </label>
                  <textarea
                    name="note"
                    class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4"
                    placeholder="Notes for delivery"
                  ></textarea>
                </div>
                <div class="mt-4">
                  <button class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
                    Process
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div class="pt-12 md:pt-0 2xl:ps-4">
              <h2 class="text-xl font-bold">Order Summary</h2>
              <div class="mt-8">
                <div class="flex flex-col space-y-4">
                  <div class="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt="images"
                        class="w-60"
                      />
                    </div>
                    <div>
                      <h2 class="text-xl font-bold">Title</h2>
                      <p class="text-sm">Lorem ipsum dolor sit amet, tet</p>
                      <span class="text-red-600">Price</span> $20
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/collection/190727/1600x900"
                        alt="images"
                        class="w-60"
                      />
                    </div>
                    <div>
                      <h2 class="text-xl font-bold">Title</h2>
                      <p class="text-sm">Lorem ipsum dolor sit amet, tet</p>
                      <span class="text-red-600">Price</span> $20
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex p-4 mt-4">
                <h2 class="text-xl font-bold">ITEMS 2</h2>
              </div>
              <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span class="ml-2">$40.00</span>
              </div>
              <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span class="ml-2">$10</span>
              </div>
              <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span class="ml-2">$50.00</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Checkout;
