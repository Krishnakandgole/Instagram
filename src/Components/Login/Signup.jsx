import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth.js"; 
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {

   const navigate =  useNavigate()
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSignup((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    if (!userSignup.email || !userSignup.password || !userSignup.username) {
        toast("OOp sometime try again!")
      return;
    }else{
        createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password)
        .then( async (res) => {
            const user = res.user;
          await  updateProfile(user, {
                displayName: userSignup.username,
            })
            toast("User created successfully!")
            navigate('/login')

        })
        .catch((err) =>  console.log(err));
    }

    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 w-full">
      <div className="w-full max-w-md bg-gray-900 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Instagram</h1>
        <p className="text-center text-gray-400 mb-6">
          Sign up to see photos and videos from your friends.
        </p>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center mb-4">
          <span className="mr-2">🔵</span> Log in with Facebook
        </button>

        <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-700" />
          <span className="mx-4 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Mobile number or email address"
            value={userSignup.email}
            onChange={handleChange}
            autoComplete="off"
            name="email"
            className="w-full bg-gray-800 text-white p-2 mb-3 rounded-md border border-gray-700 focus:outline-none focus:border-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userSignup.password}
            autoComplete="off"
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-2 mb-3 rounded-md border border-gray-700 focus:outline-none focus:border-gray-500"
          />
          <input
            type="text"
            placeholder="Full Name"
            name="username"
            value={userSignup.username}
            autoComplete="off"
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-2 mb-3 rounded-md border border-gray-700 focus:outline-none focus:border-gray-500"
          />

          <p className="text-xs text-gray-400 mb-4 text-center">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <span className="text-blue-400 cursor-pointer">Learn more</span>
          </p>

          <p className="text-xs text-gray-400 mb-4 text-center">
            By signing up, you agree to our{" "}
            <span className="text-blue-400 cursor-pointer">Terms</span>,{" "}
            <span className="text-blue-400 cursor-pointer">Privacy Policy</span>,
            and <span className="text-blue-400 cursor-pointer">Cookies Policy</span>.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>

      <div className="w-full max-w-md text-white text-center mt-4">
        <p>
          Have an account?{" "}
          <NavLink to="/login">
            <span className="text-blue-400 cursor-pointer">Log in</span>
          </NavLink>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
