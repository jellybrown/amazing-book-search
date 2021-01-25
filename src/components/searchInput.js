import React, { useState } from "react";

const SearchInput = () => {
  const [term, setTerm] = useState("");
  const onChange = (e) => {
    setTerm(e.target.value);
    console.log(term);
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log(term);
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
