import React from 'react';
import krishna from "../../assets/img/krishna.jpeg";
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';

function Profile({username}) {
  return (

    <>
    <Header/>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center bg-black text-white px-4 sm:px-10 lg:px-48 py-10 lg:py-20">
        {/* Profile Section */}
        <div className="flex flex-col items-center lg:items-start w-full max-w-lg">
          {/* Profile Header */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
            <div className="relative flex items-center justify-center lg:block">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Profile" className="rounded-full w-28 h-28 md:w-28 md:h-28 sm:w-32 sm:h-32 lg:w-60 lg:h-60 object-cover" />
              <input type="text" placeholder="Note..." className="hidden lg:block w-24 bg-gray-900 absolute top-0 left-0 text-white placeholder:text-white p-2 rounded-xl outline-none" />
            </div>

            <div className="flex flex-col items-center lg:items-start w-full mt-4 lg:mt-0 lg:ml-5">
              <div className="flex items-center gap-2 sm:gap-4">
                <h1 className="font-bold text-lg sm:text-xl">{username}</h1>
                <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 sm:px-4 rounded-lg text-sm sm:text-base">Edit Profile</button>
                <button className="hidden lg:inline-block bg-gray-800 hover:bg-gray-700 text-white py-1 px-4 rounded-lg text-sm">View Archive</button>
                <i className="fa-solid fa-gear text-xl sm:text-2xl"></i>
              </div>

              <div className="my-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <h1 className="font-semibold text-sm sm:text-base">0 Posts</h1>
                  <h1 className="font-semibold text-sm sm:text-base">242 Followers</h1>
                  <h1 className="font-semibold text-sm sm:text-base">187 Following</h1>
                </div>
                <div className="mt-2">
                  <h1 className="font-bold text-sm sm:text-base">{username}</h1>
                  <h1 className="font-bold text-sm sm:text-base">Jai Shree Ram</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Add Story Section */}
          <div className="mt-5 lg:mt-2">
            <div className="border border-gray-600 flex items-center justify-center rounded-full w-16 h-16 sm:w-20 sm:h-20 cursor-pointer">
              <i className="fa-solid fa-plus text-3xl text-gray-400"></i>
            </div>
          </div>

          <hr className="bg-gray-700 h-px w-full my-5" />

          {/* Navigation Section */}
          <ul className="flex items-center justify-around w-full text-sm sm:text-base">
            <li>
              <NavLink to="" className="flex items-center gap-1 font-bold">
                <i className="fa-solid fa-film"></i>Post
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="flex items-center gap-1 font-bold">
                <i className="fa-regular fa-bookmark"></i> Save
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/saved" className="flex items-center gap-1 font-bold">
                <i className="fa-solid fa-tag"></i> Tagged
              </NavLink>
            </li>
          </ul>

          {/* Empty Posts Section */}
          <div className="flex flex-col items-center justify-center text-center bg-black text-white my-10">
            <div className="mb-4 border-2 border-white rounded-full p-3 sm:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 sm:w-12 sm:h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3.89-3.89a1 1 0 011.41 0L12 7m6-4h3m-3 0V3m0-3v3m4 16a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14z" />
              </svg>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold mb-2">Share Photos</h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-md mb-4">
              When you share photos, they will appear on your profile.
            </p>
            <NavLink to="" className="text-blue-500 hover:underline">Share your first photo</NavLink>
          </div>

          {/* Footer Links */}
          <div className="text-gray-500 text-sm text-center mt-10">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-3">
              <NavLink to="/meta" className="hover:underline">Meta</NavLink>
              <NavLink to="/about" className="hover:underline">About</NavLink>
              <NavLink to="/blog" className="hover:underline">Blog</NavLink>
              <NavLink to="/jobs" className="hover:underline">Jobs</NavLink>
              <NavLink to="/help" className="hover:underline">Help</NavLink>
              <NavLink to="/api" className="hover:underline">API</NavLink>
              <NavLink to="/privacy" className="hover:underline">Privacy</NavLink>
              <NavLink to="/terms" className="hover:underline">Terms</NavLink>
              <NavLink to="/locations" className="hover:underline">Locations</NavLink>
              <NavLink to="/instagram-lite" className="hover:underline">Instagram Lite</NavLink>
              <NavLink to="/threads" className="hover:underline">Threads</NavLink>
              <NavLink to="/meta-verified" className="hover:underline">Meta Verified</NavLink>
            </div>
            <p>English © 2025 Instagram from Meta</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;


// const [userData, setUserData] = useState({
//   userID: "",
//   password: ""
// });

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (userData.userID === "admin" && userData.password === "password") {
//       setUserlogin(true);
//       console.log(userData);
//   } else {
//       alert("Invalid credentials. Please try again.");
//   }
// };

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setUserData({ ...userData, [name]: value });
// };