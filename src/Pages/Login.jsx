import React, { use, useState } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const {signIn} = use(AuthContext)
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.pass.value;
        signIn(email, password)
        .then(() => {
            alert('log in successful')
            navigate(`${location.state ? location.state : '/'}`)
        })
        .catch((error) => {
            const errorCode = error.code
            // const errorMessage = error.message;
            setError(errorCode)
        });
    }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Log In Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" required className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" name="pass" required className="input" placeholder="Password" />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div>
                {
                  error && <p className="text-red-600">{error}</p>
                }
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <div>
                <h2 className="font-semibold pt-3">
                  Dont’t Have An Account ?{" "}
                  <NavLink className="text-secondary" to={"/auth/signup"}>
                    Register
                  </NavLink>
                </h2>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
