import { Routes, Route } from "react-router-dom";
import { Products } from "./components/Products";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
