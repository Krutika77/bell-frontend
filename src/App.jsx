import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConnectForm from "./pages/ConnectForm";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/connect" element={<ConnectForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
