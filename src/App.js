import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import "./styles/app.scss";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default App;
