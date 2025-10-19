import React, { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
    const {signUpUser, updateUser} = use(AuthContext)
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
          return setError("name 5 carecter hote hobe")
        }
        const photoUrl = form.url.value;
        const email = form.email.value;
        const password = form.pass.value;
        setError('')
        signUpUser(email, password)
        .then(() => {
          updateUser({displayName: name, photoURL: photoUrl})
          .then(() => {
            alert('successful')
            navigate('/')
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Log In Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleSignUp}>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
              />

              <label className="label">Photo URL</label>
              <input
                type="text"
                name="url"
                className="input"
                placeholder="Enter your URL"
              />

              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" name="pass" className="input" placeholder="Password" />

              <div>
                {
                  error && <p className="text-red-600">{error}</p>
                }
              </div>

              <button className="btn btn-neutral mt-4">Login</button>
              <div>
                <h2 className="font-semibold pt-3">
                  Already Have An Account ?{" "}
                  <NavLink className="text-secondary" to={"/auth/login"}>
                    Login
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

export default SignUp;
