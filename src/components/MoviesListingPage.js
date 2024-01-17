import '../public/MovieListingPage.css';
// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import MoviesCard from './MoviesCard';

function MoviesListingPage() {

 const location = useLocation();
 const email = location.state && location.state.email;


  return (
    <div >
     <HeaderPage email={email}/>
     <MoviesCard email={email} />
    </div>
  );
}

export default MoviesListingPage;