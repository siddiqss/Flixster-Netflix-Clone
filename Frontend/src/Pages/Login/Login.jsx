import "./Login.scss";
import logo from "../../Logo/logo-transparent.png";
import { useContext, useState } from "react";
import { logIn } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e)=>{
    e.preventDefault();
    logIn({email,password}, dispatch);
  }

  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img src={logo} alt='' className="logo" />
        </div>
      </div>
      <div className='container'>
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone no" onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          <button className="loginButton" onClick={handleLogin}>Sign In</button>
          <span>New to Flixster? <b>Sign up now</b></span>

        </form>
      </div>
    </div>
  );
}

export default Login;
