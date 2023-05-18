import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return( 
    <div className="">
      <form className="mx-auto shadow p-3 mb-5 mt-5 bg-body rounded form_login">
        <h1 className="mb-2 text-center">Login</h1>
        <div className="separator"></div>
            <div className="form-floating mb-4">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-4 mb-2">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg mt-3 clspecial_btn"><Link className="text-light text-decoration-none" to="/Page_principale">Connecte</Link></button>

            <div className="ctn_password_count">
                <Link className="text-primary forget_pass" to="/forgetpassword">Forget password</Link>
                <p className="text-primary">-</p>
                <Link className="text-primary create_count" to="/Registre">Create a count</Link>
            </div>
      </form>
    </div>
  )
}

export default Login;
