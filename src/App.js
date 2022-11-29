import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  let Component
  switch (window.location.pathname) {
    case "/react-portfolio":
    Component = <Home />
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
