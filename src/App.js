import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Referral from "./components/referral/Referral";
import Rent from "./components/rentCar/Rent";
import Scooters from "./components/scooters/Scooters";
import Slider from "./components/slider/Slider";
import Taxi from "./components/taxi/Taxi";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Header />
      <Slider />
      <Main />
      <div className="app__content">
        <Taxi />
        <Rent />
        <Scooters />
        <Referral />
        <h1>Наши новости</h1>
        
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;
