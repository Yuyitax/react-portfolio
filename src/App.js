import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  let Component
  switch (window.location.pathname) {
    case "/react-portfolio":
    Component = <Home />
    break
    case "/about":
      Component = <About />
      break
    case "/portfolio":
      Component = <Portfolio />
    break
    default:
      Component = <h1>404</h1>
  }
  return (
    <>
    <Navbar />
    {Component}
    </>
  ) 
}

export default App;
