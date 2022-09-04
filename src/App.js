import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import { TodoProvider } from "./context/Todo.context";
import "./styles/app.scss";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <TodoProvider>
          <Header />
          <Body />
        </TodoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
