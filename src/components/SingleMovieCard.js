import HeaderPage from './HeaderPage';
import '../public/singleCard.css'
import { useLocation } from 'react-router-dom';

function SingleMovieCard() {
  const location = useLocation();
  const email = location.state && location.state.email;
  const movieInfo = location.state && location.state.movieInfo; 

  console.log("Email:", email);
  console.log("Movie info", movieInfo);
  
  return (
    <div >
      <HeaderPage email={email}/>
      <div class="product-card">
        <div class="product-tumb">
          <img src={movieInfo.i.imageUrl} alt="" />
        </div>
        <div class="product-details">
          <h4>{movieInfo.l}</h4>
          <p>{movieInfo.s}</p>
          <p>Release Date: {movieInfo.y}</p>
          <div class="product-bottom-details">
            <div class="product-price"><small>$96.00</small>$230.99</div>
            <div class="product-links">
            <span><i class="fa fa-heart"></i></span>
            <span><i class="fa fa-shopping-cart"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMovieCard;