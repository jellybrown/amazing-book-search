import { BookProvider } from "./bookContext";
import Main from "./components/Main";

function App() {
  return (
    <BookProvider>
      <Main />
    </BookProvider>
  );
}

export default App;
