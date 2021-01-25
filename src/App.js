import logo from "./logo.svg";
import "./App.css";
import BookList from "./components/bookList";
import SearchInput from "./components/searchInput";
import { BookProvider } from "../bookContext";

function App() {
  return (
    <BookProvider>
      <SearchInput />
      <BookList />
    </BookProvider>
  );
}

export default App;
