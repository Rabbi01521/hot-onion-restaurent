import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useCartAuth from "../../../hooks/useCartAuth";
import logo from "../../../images/logo/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCartAuth();

  // console.log(cart);
  const getData = localStorage.getItem("food_cart");
  // console.log(getData);
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-900">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/home">
                      <img
                        className="block h-8 w-auto"
                        src={logo}
                        alt="hot-onion"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6 md:w-full md:flex md:justify-end md:mx-auto">
                    <div className=" relative flex space-x-4 items-center">
                      <Link to="/cart">
                        <ShoppingCartIcon className="h-5 w-5 text-blue-500">
                          {" "}
                        </ShoppingCartIcon>
                        <small className="text-white absolute top-0 left-5 bg-red-400 w-5 h-5 text-center rounded-full flex justify-center items-center font-semibold ">
                          {cart?.length ? cart?.length : 0}
                        </small>
                      </Link>
                      {!user?.email ? (
                        <div>
                          <Link
                            className="   text-white font-medium hover:bg-gray-600 p-2 mr-2 rounded-sm"
                            to="/login"
                          >
                            Login
                          </Link>
                          <Link
                            className=" text-white font-medium bg-red-600 rounded-full py-2 px-6"
                            to="/signup"
                          >
                            Sign up
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  {user?.email ? (
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>

                          <img
                            className="h-8 w-8 rounded-full bg-white"
                            src={
                              user?.photoURL === null
                                ? "https://i.ibb.co/X3tjtPV/pngegg.png"
                                : user.photoURL
                            }
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/profile"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {user.displayName}
                              </Link>
                            )}
                          </Menu.Item>
                          {/* <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item> */}
                          <Menu.Item>
                            {({ active }) => (
                              <p
                                onClick={logOut}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 cursor-pointer py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </p>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className=" relative px-2 pt-2 pb-3 space-y-1 text-center">
                <Link to="/cart">
                  <ShoppingCartIcon className="h-5 w-5 text-blue-500 text-center">
                    {" "}
                  </ShoppingCartIcon>
                  <small className="text-white absolute top-0 left-5 bg-red-400 w-5 h-5 text-center rounded-full flex justify-center items-center font-semibold ">
                    {cart?.length ? cart?.length : 0}
                  </small>
                </Link>
                {!user?.email ? (
                  <div className="flex flex-col">
                    <Link
                      className="   text-white font-medium hover:bg-gray-600 p-2 mr-2 rounded-sm"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className=" text-white font-medium bg-red-600 rounded-full py-2 px-6"
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
