import "./App.css";
import { Routes, Route } from "react-router-dom";
import Adminpage from "./pages/Adminpage";
import Mainpage from "./pages/Mainpage";
import Consumerpage from "./pages/Consumerpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/consumer" element={<Consumerpage />} />
      </Routes>
    </div>
  );
}

export default App;
