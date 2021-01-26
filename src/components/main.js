import React, { useContext } from "react";
import { BookContext } from "../bookContext";
import BookList from "./bookList";
import SearchInput from "./searchInput";

const Main = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <>
      <SearchInput />
      {books?.length > 0 ? <BookList /> : null}
    </>
  );
};

export default Main;
