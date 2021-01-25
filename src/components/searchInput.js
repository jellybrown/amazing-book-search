import axios from "axios";
import React, { useState } from "react";

const SearchInput = () => {
  const [term, setTerm] = useState("");
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
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <p>Book search</p>
      <form onSubmit={onSearch}>
        <input type="text" name="search" value={term} onChange={onChange} />
        <button>검색</button>
      </form>
    </>
  );
};

export default SearchInput;
