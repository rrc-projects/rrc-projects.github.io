import React from "react";
import { HeartIcon, SearchIcon } from "@heroicons/react/outline";
import PageNavs from "./PageNavs";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-12 h-32 rounded-b-2xl items-center">
      <section>
        <h2 className="text-3xl font-semibold">Booksy</h2>
      </section>
      <section className=" w-2/4">
        <form className="flex items-center rounded-lg px-4 bg-gray-100">
          <input
            type="text"
            className="p-4 text-lg w-full bg-gray-100 border-none outline-none"
            name="search"
            placeholder="Search by author, title, name"
          />
          <SearchIcon className="h-7" />
        </form>
      </section>
      <section className="flex justify-between px-4 w-2/12 items-center">
        <HeartIcon className="h-8" />
        <div className="py-4 px-6 text-white font-semibold rounded-full bg-purple-600 text-xl">
          O
        </div>
        <p className="text-xl">EN</p>
      </section>
    </nav>
  );
};

export default Navbar;
