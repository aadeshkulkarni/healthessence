import About from "./components/About";
import Home from "./components/Home";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import ProductList from "./components/ProductList";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./components/Admin";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Home />
      {/* <Admin /> */}
      {/* <Login /> */}
    </Router>
  );
};

export default App;
