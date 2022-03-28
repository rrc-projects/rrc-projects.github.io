import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BookCards = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://bookshelves.p.rapidapi.com/books", {
        headers: {
          "X-RapidAPI-Host": "bookshelves.p.rapidapi.com",
          "X-RapidAPI-Key":
            "d799bd12a7mshca9f64a96ecade7p1824fcjsn87d6c63a7851",
        },
      })
      .then((res) => setBooks(res.data.Books));
  }, []);

  return (
    <div className="w-full h-full mt-10">
      <div className="w-4/5 mx-auto">
        <section className="flex justify-between">
          <h1 className="text-purple-900 text-3xl font-bold">Popular Now</h1>
          <button type="" className="text-xl font-semibold text-gray-600">
            View All
          </button>
        </section>
        <section className="grid grid-cols-4 gap-10 mt-10">
          {books?.map((book) => {
            return (
              <BookCard
                key={book.id}
                title={book.title}
                name={book.author}
                rating={book.review.split(" ")[0]}
                img={book.imgUrl}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default BookCards;
