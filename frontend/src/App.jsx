import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import "./index.css";
import "./styles/App.scss";
import Inscription from "@pages/Inscription";
import Navbar from "@components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popping from "@components/Popping";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/cours_popping" element={<Popping />} />
        {/* <Route path="/cours_locking" element={<Popping />} />
        <Route path="/cours_street_lady" element={<Popping />} /> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
