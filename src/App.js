import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieHomePage from './components/MoviesHomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MoviesListingPage from './components/MoviesListingPage';
// import { AuthProvider } from './components/AuthContext'
import SingleMovieCard from './components/SingleMovieCard';
import PageNotFound from './components/PageNotFound';





function App() {
  return (
   
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<MovieHomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="Movies" element={<MoviesListingPage />} />
      <Route path="movie/:movieIndex" element={<SingleMovieCard />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
 
  );
}

export default App;
