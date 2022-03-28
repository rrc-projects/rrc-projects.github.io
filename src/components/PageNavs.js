import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
const PageNavs = () => {
  return (
    <div
      className="flex justify-evenly font-semibold items-center space-x-8
    text-xl mt-10 text-gray-400"
    >
      <a href="/" className="text-purple-800">
        Home
      </a>
      <a href="/">Bestseller</a>
      <a href="/" className="flex items-center space-x-1">
        <span>Category</span>
        <ChevronDownIcon className="h-6" />
      </a>
      <a href="/">Find a store</a>
      <a href="/">Blog</a>
    </div>
  );
};

export default PageNavs;
