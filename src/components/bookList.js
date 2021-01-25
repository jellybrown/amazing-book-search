import React from "react";

const BookList = () => {
  const books = [
    {
      id: 1,
      name: "첫번째",
      price: "30,000",
    },
    {
      id: 2,
      name: "두번째",
      price: "25,000",
    },
    {
      id: 3,
      name: "세번째",
      price: "33,000",
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <li>{book.name}</li>
      ))}
    </div>
  );
};

export default BookList;
