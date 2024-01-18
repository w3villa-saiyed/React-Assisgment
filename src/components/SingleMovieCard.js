import HeaderPage from './HeaderPage';
import '../public/singleCard.css'
import { useLocation } from 'react-router-dom';

function SingleMovieCard() {
  const location = useLocation();
  const email = location.state && location.state.email;
  const movieInfo = location.state && location.state.movieInfo;

  console.log("Email:", email);
  console.log("Movie info", movieInfo);

  const bannerStyle = window.innerWidth <= 700
    ? {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%',
        width: '600px',
        height: '400px',
        backgroundImage: `url(${movieInfo.i.imageUrl})`,
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        backgroundPosition: 'center',
        border: '0px solid transparent',
        boxShadow: '10px 10px 41px 0px rgba(0, 0, 0, 0.603)',
      }
    : {
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        height: '85vh',
        backgroundImage: `url(${movieInfo.i.imageUrl})`,
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        backgroundPosition: 'right',
        border: '0px solid transparent',
        boxShadow: '10px 10px 41px 0px rgba(0, 0, 0, 0.603)',
      };


  return (
    <div>
      <HeaderPage email={email}/>
      <div class="nav">
      </div>
      <div class="img"></div>
      <div class="wrap">
        <div class="banner" style={bannerStyle} >
          <div class="content">
            <div class="everything">
              <span class="vip">Premium</span>
              <div class="title">
                <span>{movieInfo.l}</span>
              </div>
              <div class="episodes">
                <span>{movieInfo.y} | </span>
                <span>1 Season |</span><span> 6 Episodes |</span><span> Superhero |</span><span> 12+ |</span><span> Marvel</span>
              </div>
              <div class="description">
                <p>
                {movieInfo.s}
                </p>
              </div>
              <div class="starring">
                <span>Starring : Chris Evans,Hayley Atwell,Hugo Weaving,Tilda Swinton</span>
              </div>
              <div class="watch">
                <i class="fas fa-play"></i>
                <button>Watch Now</button>
              </div>

            </div>

          </div>

        </div>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    </div>
  );
}

export default SingleMovieCard;
