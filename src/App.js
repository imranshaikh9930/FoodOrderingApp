import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact/>}/>
          
        </Routes>

      </Router>
      <Footer/>
  
     
    </div>
  );
}

export default App;
