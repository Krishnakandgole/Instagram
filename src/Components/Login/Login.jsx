import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth.js";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ setUserlogin }) => {
    const navigate = useNavigate()
    const [userSignup, setUserSignup] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserSignup((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userSignup.email || !userSignup.password) {
            toast("OOp sometime try again!")
            return;
        } else {
            signInWithEmailAndPassword(auth, userSignup.email, userSignup.password)
                .then((res) => {

                    toast("User created successfully!")
                    navigate('/')
                    setUserlogin(true)

                })
                .catch((err) => console.log(err));
        }

    }

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 w-full">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
                {/* Left Side - Mockup Image */}
                <div className="hidden md:block w-80">
                    <img
                        src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png"
                        alt="Instagram Mockup"
                        className="w-full h-full"
                    />
                </div>

                {/* Right Side - Login Form */}
                <div className="bg-black  border p-4 rounded-lg shadow-lg w-80 h-96">
                    <h1 className="text-4xl font-[Pacifico] mb-5  text-white text-center">Instagram</h1>
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
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Log in
                        </button>
                        <ToastContainer />
                    </form>
                    <div className="text-center text-gray-500 my-4">OR</div>
                    <div className="text-center text-blue-500 cursor-pointer">Log in with Facebook</div>
                    <div className="text-center text-blue-500 text-sm mt-2 cursor-pointer">Forgotten your password?</div>
                </div>
            </div>
            <div className="text-white text-sm mt-6">
                Don't have an account? <NavLink to="/signup" >
                    <span className="text-blue-500 cursor-pointer">Sign up</span>
                </NavLink>
            </div>
            <div className="mt-6 text-white text-sm">Get the app.</div>
            <div className="flex space-x-4 mt-2">
                <img src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png" alt="Google Play" className="w-24 cursor-pointer" />
                <img src="https://static.cdninstagram.com/rsrc.php/v4/yu/r/EHY6QnZYdNX.png" alt="Microsoft" className="w-24 cursor-pointer" />
            </div>
        </div>
    );
};

export default Login;
