import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
    return (
      <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    )
  }




// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// function App() {
//   let Component
//   switch (window.location.pathname) {
//     case "/react-portfolio":
//     Component = <Home />
//     break
//     case "/about":
//       Component = <About />
//       break
//     case "/portfolio":
//       Component = <Portfolio />
//     break
//     default:
//       Component = <h1>404</h1>
//   }
//   return (
//     <>
//     <Navbar />
//     {Component}
//     </>
//   ) 
// }

export default App;
