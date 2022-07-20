import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import "./index.css";
import "./styles/App.scss";
import Inscription from "@pages/Inscription";
import Navbar from "@components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popping from "@components/Popping";
import Locking from "@components/Locking";
import NewSchool from "@components/NewSchool";
import Dancehall from "@components/Dancehall";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/cours_popping" element={<Popping />} />
        <Route path="/cours_locking" element={<Locking />} />
        <Route path="/cours_new-school" element={<NewSchool />} />
        <Route path="/cours_dancehall" element={<Dancehall />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
