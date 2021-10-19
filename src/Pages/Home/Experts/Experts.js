import { ArrowSmRightIcon, FireIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

const callouts = [
  {
    name: "Fast Delivery",
    description:
      "Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.",
    imageSrc:
      "https://i.ibb.co/MG8VtRt/adult-blur-blurred-background-687824.png",
    imageAlt: "img1",
    to: "/",
  },
  {
    name: "A Good Auto Responder",
    description:
      "Keep your system in sync automated web hook based notifications each time link is paid and how we dream about our future.",
    imageSrc: "https://i.ibb.co/nCdBsfC/chef-cook-food-33614.png",
    imageAlt: "img2",
    to: "/",
  },
  {
    name: "Home Delivery",
    description:
      "Keep your system in sync automated web hook based notifications each time link is paid and how we dream about our future.",
    imageSrc: "https://i.ibb.co/vQ8NpNM/architecture-building-city-2047397.png",
    imageAlt: "img3",
    to: "/",
  },
];

const Experts = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Why you choose us
            </h2>
            <p className="text-sm md:w-6/12 sm:w-full mt-4">
              Barton waited twenty always repair in within we do. An delighted
              offending curiosity my is dashwoods at. Boy prosperous increasing
              surrounded
            </p>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500 flex items-center">
                    <FireIcon className=" w-5 h-5 rounded-t-full inline-block bg-red-500 mr-3 text-white" />
                    <Link to={callout.to} className="text-2xl">
                      <span className="absolute inset-0" />
                      {callout.name}
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                  <Link to="/more">
                    See more{" "}
                    <ArrowSmRightIcon className=" w-5 h-5 inline-block bg-green-500 rounded-full text-white" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
