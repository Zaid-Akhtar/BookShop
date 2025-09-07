// import './App.css';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AddBooks from "./Pages/AddBooks";
import Books from "./Pages/Books";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbooks" element={<AddBooks />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
