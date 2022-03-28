import React from "react";
import { StarIcon } from "@heroicons/react/solid";
const BookCard = ({ name, img, rating, title }) => {
  return (
    <div className="p-2 space-y-1">
      <img
        src={img}
        className="border h-[400px] w-[800px] rounded-lg"
        alt={title}
      />
      <h2 className="text-xl font-semibold text-gray-500">{title}</h2>
      <h4 className="text-lg text-gray-400">{name}</h4>
      <div className="flex w-full justify-start space-x-3">
        {Array(5)
          .fill()
          .map((_, i) => {
            return i < rating ? (
              <StarIcon className="h-6 text-yellow-300" />
            ) : (
              <StarIcon className="h-6 text-gray-400" />
            );
          })}
      </div>
    </div>
  );
};

export default BookCard;
