import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ConnectForm from "./pages/ConnectForm";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = '/' element = {<HomePage/>} />
      <Route path="/connect" element={<ConnectForm />} />
      <Route path="*" element = {<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
