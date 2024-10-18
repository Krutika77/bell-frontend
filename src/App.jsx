import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConnectPage from "./pages/ConnectPage/ConnectPage";
import QuizPage from './pages/QuizPage/QuizPage';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
