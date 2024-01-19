import '../public/MovieListingPage.css';
// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import MoviesCard from './MoviesCard';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MoviesListingPage() {
  const navigate = useNavigate();
 const location = useLocation();
 const email = location.state && location.state.email;
 const loginStatus = location.state && location.state.loginStatus;

console.log(loginStatus)


useEffect(() => {
  if (loginStatus === null) {
    // Redirect to login page if loginStatus is null
    navigate('/login');
  }
}, [loginStatus, navigate]);

// if (loginStatus === null) {
//   // Redirect to login page if loginStatus is null
//   navigate('login');
//   return null; // Return null to prevent rendering the rest of the component
// }
  return (
    <div >
     <HeaderPage email={email}/>
     <MoviesCard email={email} />
    </div>
  );
}

export default MoviesListingPage;