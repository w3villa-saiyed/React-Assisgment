import {useState, useEffect } from 'react';
import '../public/MovieHomePage.css';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null); // null: initial, true: success, false: failure
  const navigate = useNavigate();
  // const { login } = useAuth();

    const handleInputChange = (e) => {
        if (e.target.name === 'email') {
          setEmail(e.target.value);
        } else if (e.target.name === 'password') {
          setPassword(e.target.value);
        }
      };
    
      const handleLogin = async () => {
        try {
          const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.ok) {
            // login(email);
            console.log(response)
            setLoginStatus(true);
          } else {
            setLoginStatus(false);
          }
        } catch (error) {
          console.error('Error during login:', error);
          setLoginStatus(false);
        }
      };
    
      useEffect(() => {
        if (loginStatus === true) {
          // Login successful, navigate to MovieListingPage
          navigate('/Movies',{ state: { email } })
        } else if (loginStatus === false) {
          // Login failed, you can show an error message or take any other appropriate action
          console.log('Login failed. Please check your credentials.');
        }
      }, [loginStatus, navigate,email]);

useEffect(()=>{
    const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay:${index * 40}ms">${letter}</span>`)
        .join('')
})
})
  return (
    <div className='background-login'>
    <div className="container">
      <h1>Login</h1>
      <form>
          <div className="form-control">
            <input
              type="text"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <label>Email</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <label>Password</label>
          </div>
          <button
            className="btn"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
          {loginStatus === false && <p className="error-message">Incorrect email or password</p>}
          <p className="text">Don't have an account? <a href="/register">Register</a></p>
        </form>
    </div>
  </div>
  );
}


export default LoginPage;
