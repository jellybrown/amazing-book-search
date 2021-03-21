import React, { useContext } from "react";
import { BookContext } from "../bookContext";
import BookList from "./bookList";
import SearchHeader from "./searchHeader";

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
