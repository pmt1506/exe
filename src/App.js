import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CoffeeList from "./components/CoffeeList";
import CoffeeDetail from "./components/CoffeeDetail";
import WorkshopDetail from "./components/WorkshopDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<CoffeeList />} />
        <Route path="/coffee/:id" element={<CoffeeDetail />} />
        <Route path="/workshop/:id" element={<WorkshopDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
