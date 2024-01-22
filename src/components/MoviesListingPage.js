import '../public/MovieListingPage.css';
// import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import MoviesCard from './MoviesCard';
import React, { useEffect } from 'react';


function MoviesListingPage() {
  const navigate = useNavigate();
 const location = useLocation();
 const email = location.state && location.state.email;
 const loginStatus = location.state && location.state.loginStatus;

console.log(loginStatus);


// Effect to redirect to the login page if loginStatus is null
useEffect(() => {
  if (loginStatus === null) {
    // Redirect to login page if loginStatus is null
    navigate('/login');
  }
}, [loginStatus, navigate]);
  // Rendering the HeaderPage and MoviesCard components
  return (
    <div >
     <HeaderPage email={email}/>
     <MoviesCard email={email} loginStatus={loginStatus}/>
    </div>
  );
}

export default MoviesListingPage;