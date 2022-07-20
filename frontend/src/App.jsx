import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import "./index.css";
import "./styles/App.scss";
import Inscription from "@pages/Inscription";
import Navbar from "@components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
