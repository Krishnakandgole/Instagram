import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCompass,
  faFilm,
  faMessage,
  faHeart,
  faPlus,
  faUser,
  faRobot,
  faComments,
  faHome,
  faSignOutAlt 
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Sidebar for larger screens */}
      <nav className="hidden md:flex flex-col bg-black text-white w-60 fixed top-0 left-0 h-screen py-5 shadow-md z-1">
        <div className="container px-4 py-3 flex flex-col items-start gap-5">
          <NavLink to="/" className="text-2xl font-[Pacifico] mb-5">
            Instagram
          </NavLink>

          <ul className="flex flex-col gap-4 w-full">
            {menuItems.map(({ to, icon, label }) => (
              <li key={to} className="w-full">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `duration-200 flex items-center gap-5 px-5 py-2 rounded w-full ${
                      isActive ? "text-[#f5ebe0] bg-gray-800" : "text-white hover:bg-gray-800"
                    }`
                  }
                >
                  <FontAwesomeIcon icon={icon} className="text-xl" /> <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Bottom Navbar for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black text-white py-2 shadow-md z-10">
        <ul className="flex justify-around">
          {menuItems.map(({ to, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center px-3 py-2 ${
                    isActive ? "text-[#f5ebe0]" : "text-white"
                  }`
                }
              >
                <FontAwesomeIcon icon={icon} className="text-xl" />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

const menuItems = [
  { to: "/home", icon: faHome, label: "Home" },
  { to: "/search", icon: faSearch, label: "Search" },
  { to: "/explore", icon: faCompass, label: "Explore" },
  { to: "/reels", icon: faFilm, label: "Reels" },
  { to: "/message", icon: faMessage, label: "Message" },
  { to: "/notifications", icon: faHeart, label: "Notification" },
  { to: "/create", icon: faPlus, label: "Create" },
  { to: "/profile", icon: faUser, label: "Profile" },
  { to: "https://aistudio.instagram.com/?utm_source=ig_web_nav&next=%2F&hl=en3", icon: faRobot, label: "AI Studio" },
  { to: "https://www.threads.net/?xmt=AQGzdxq4rLUg3OAHO5cqsChA9IQmZsBUJFqryJpEsNI6DJI&next=%2F&hl=en3", icon: faComments, label: "Threads" },
  { to: "/login", icon: faSignOutAlt , label: "Logout" },
];

export default Header;
