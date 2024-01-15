import { useEffect } from 'react';
import '../public/MovieHomePage.css';



function LoginPage() {
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
          <input type="text" required name="email" />
          <label>Email</label>
        </div>
        <div className="form-control">
          <input type="password" required name="password" />
          <label>Password</label>
        </div>
        <button className="btn">Login</button>
        <p className="text">Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  </div>
  );
}


export default LoginPage;
