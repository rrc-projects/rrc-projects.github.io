import React from "react";

const Header = () => {
  return (
    <div className="w-full mt-16 h-2/5">
      <div className="w-4/5 mx-auto  bg-cover-image rounded-2xl space-y-6 p-10 border h-full">
        <h1 className="text-5xl font-bold text-purple-900">
          Build your library
        </h1>
        <h3 className="text-xl w-1/4 font-semibold text-gray-100">
          Buy two selected books and get one for free
        </h3>
        <button
          className="rounded-lg px-8 py-4 bg-amber-500 text-lg text-white"
          type="submit"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Header;
