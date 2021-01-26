import logo from "./logo.svg";
import "./App.css";

import { BookProvider } from "./bookContext";
import Main from "./components/main";

function App() {
  return (
    <BookProvider>
      <Main />
    </BookProvider>
  );
}

export default App;
