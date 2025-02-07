import React, { useEffect, useState } from "react";
import { Header } from "../Components";

function Explore() {
  const [explore, setExplore] = useState([]);

  useEffect(() => {
    fetch("/API/Configer.json")
      .then((res) => res.json())
      .then((data) => {
        setExplore(data.explore);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Header />
      <div className="bg-black text-white min-h-screen p-4 w-full lg:pl-60">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4 py-10">
          {explore.map((video, index) => (
            <div
              key={index}
              className="relative rounded-md overflow-hidden aspect-square transition-transform duration-300 hover:scale-105"
            >
              <img
                src={video.video}
                alt={`Video ${index}`}
                className="w-full h-full object-cover cursor-pointer"
              />
              {/* Likes & Comments */}
              {video.likes && video.comments && (
                <div className="absolute bottom-2 left-2 flex items-center gap-4 bg-black/50 px-2 py-1 rounded-md">
                  <div className="flex items-center gap-1 text-red-500">
                    <i className="fa-solid fa-heart"></i>
                    <span className="text-sm font-medium">{video.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <i className="fa-solid fa-comment"></i>
                    <span className="text-sm font-medium">{video.comments}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Explore;
