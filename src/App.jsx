import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConnectForm from "./pages/ConnectForm";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<HomePage/>} />
      <Route path="/connect" element={<ConnectForm />} />
      <Route path="*" element = {<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
