import { Routes, Route } from "react-router-dom";
import { Contacts } from "./components/Contacts";
import { AboutMe } from "./components/AboutMe";
import { Status } from "./components/Status";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/status" element={<Status />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
