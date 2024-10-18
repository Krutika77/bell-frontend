import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConnectForm from "./pages/ConnectForm";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<HomePage/>} />
      <Route path="/connect" element={<ConnectForm />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
