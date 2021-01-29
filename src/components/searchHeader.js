import axios from "axios";
import React, { useContext, useState } from "react";
import { BookContext } from "../bookContext";
import Logo from "./logo";
import SearchIcon from "@material-ui/icons/Search";
import { Input, SearchButton } from "../styled/customStyle.js";

const SearchHeader = () => {
  const [term, setTerm] = useState("");
  const [books, setBooks] = useContext(BookContext);
  console.log(books);

  const onChange = (e) => {
    setTerm(e.target.value);
    console.log(term);
  };

  const searchBook = async (term) => {
    try {
      const result = await axios.get("/v1/search/book.json", {
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
        },
        params: {
          query: term,
        },
      });
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log(term);
    searchBook(term)
      .then((response) => setBooks(response.data.items))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Logo />
      <form
        onSubmit={onSearch}
        style={{ position: "relative", width: "80%", margin: "0 auto 2em" }}
      >
        <Input
          type="text"
          name="search"
          value={term}
          onChange={onChange}
          placeholder="책을 검색하세요."
        />
        <SearchButton>
          <SearchIcon style={{ fontSize: "1.3rem", color: "#a6a6a6" }} />
        </SearchButton>
      </form>
    </>
  );
};

export default SearchHeader;
