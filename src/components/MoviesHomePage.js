import '../public/MovieHomePage.css';
import { useNavigate } from 'react-router-dom';


function MovieHomePage() {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <div class="button" onClick={() => navigate('/login')}><button>Login</button></div>
      <h1>W3Villa Movies</h1>
    </div>
  );
}

export default MovieHomePage;

