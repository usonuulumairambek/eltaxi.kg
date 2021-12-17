import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Header />
      <Main />
    </div>
    // </BrowserRouter>
  );
}

export default App;
