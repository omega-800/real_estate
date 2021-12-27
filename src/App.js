import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import EditHouse from "./pages/EditHouse";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/addEdit" element={<EditHouse />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
