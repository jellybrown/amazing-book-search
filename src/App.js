import logo from "./logo.svg";
import "./App.css";
import BookList from "./components/bookList";
import SearchInput from "./components/searchInput";

function App() {
  return (
    <>
      <SearchInput />
      <BookList />
    </>
  );
}

export default App;
