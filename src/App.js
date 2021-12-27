import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import News from "./components/news/News";
import Referral from "./components/referral/Referral";
import Rent from "./components/rentCar/Rent";
// import Scooters from "./components/scooters/Scooters";
import Slider from "./components/slider/Slider";
import Stock from "./components/stock/Stock";
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
        {/* <Scooters /> */}
        <Referral />
        <h1 className="news__tittle">Наши новости</h1>
        <News />
        <Stock />
        <Footer />
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;
