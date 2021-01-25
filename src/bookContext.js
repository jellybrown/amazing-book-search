import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState();
  //   [
  //   {
  //     id: 0,
  //     src: "https://", //image
  //     title: "책제목", //title
  //     author: "작가명", //author
  //     price: 28000, //discount
  //     pubdate: 20101010, //pubdate
  //     company: "출판사", //publisher
  //   },
  //   {
  //     id: 1,
  //     src: "https://", //image
  //     title: "책제목2", //title
  //     author: "작가명2", //author
  //     price: 48000, //discount
  //     pubdate: 30101010, //pubdate
  //     company: "출판사2", //publisher
  //   },
  // ]
  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
};
