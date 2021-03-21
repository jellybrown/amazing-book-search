import React, { useContext } from "react";
import { BookContext } from "../bookContext";
import BookList from "./BookList";
import SearchHeader from "./SearchHeader";

const Main = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <>
      <SearchHeader />
      {books?.length > 0 ? <BookList /> : null}
    </>
  );
};

export default Main;
