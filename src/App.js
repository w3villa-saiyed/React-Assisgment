import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieHomePage from './components/MoviesHomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<MovieHomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
