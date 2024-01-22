// Importing the MovieListingPage.css file
import '../public/MovieListingPage.css';
// Importing the useNavigate hook from react-router-dom
import { useNavigate } from 'react-router-dom';

// HeaderPage component definition
function HeaderPage(props) {
    const navigate = useNavigate();

    // Handling sign-out and navigating to the login page
    const handleSignOut = () => {
      // Navigate to the login page and remove the email from the state
      
      navigate('/login', { state: { email: null, loginStatus: null } });
    };
      // Destructuring the email prop
    const email = props.email;
   
    // JSX for the HeaderPage component
    return  (
        <div>
          <header>
            <nav>
              <p className="logo">
                W3villa<span>Group</span>
              </p>
              <i className="fa fa-bars" id="menu"></i>
              <ul id="menu-box">
                <div className="marker"></div>
                <li>
                  <span>
                    {email}{' '}
                    {/* <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="John Doe" />{' '} */}
                    <i className="fa fa-angle-down"></i>
                  </span>
                </li>
                <li><button id='signout' onClick={handleSignOut}>sign out</button></li>
              </ul>
            </nav>
          </header>
        </div>
      );;
}
// Exporting the HeaderPage component
 export default HeaderPage;