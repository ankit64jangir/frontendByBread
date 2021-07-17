import logo from './logo.svg';
import './App.css';
import NavbarTop from "./components/Navbar/NavbarTop";
import Mainpage from "./components/Mainpage/Mainpage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
     <div className="App">
   <NavbarTop />
   <Mainpage />
   <Footer />
     </div>
  );
}

export default App;
