// src/Reel.js
import React, { useRef, useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { v3 } from './reelsdata';
import {
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  v10,
  v11,
  v12,
  v13,
  v14,
  v15,
  v16,
  v17,
  v18,
  v19,
  v20,
  v21,
  v22,
  v23,
  v24,
  v25,
  v26,
  v27,
  v28,
  v29,
  v30,
  v31,
  v32,
} from "./reelsdata.js";
import { Header } from '../Components/index.js';

const Reels = () => {
  const reels = [
    {
      id: 1,
      title: "Video 1",
      video: v1,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 2,
      title: "Video 2",
      video: v2,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 3,
      title: "Video 3",
      video: v3,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 4,
      title: "Video 4",
      video: v4,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 5,
      title: "Video 5",
      video: v5,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 6,
      title: "Video 6",
      video: v6,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 7,
      title: "Video 7",
      video: v7,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 8,
      title: "Video 8",
      video: v8,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 9,
      title: "Video 9",
      video: v9,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 10,
      title: "Video 10",
      video: v10,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 11,
      title: "Video 11",
      video: v11,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 12,
      title: "Video 12",
      video: v12,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 13,
      title: "Video 13",
      video: v13,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 14,
      title: "Video 14",
      video: v14,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 15,
      title: "Video 15",
      video: v15,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 16,
      title: "Video 16",
      video: v16,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 17,
      title: "Video 17",
      video: v17,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 18,
      title: "Video 18",
      video: v18,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 19,
      title: "Video 19",
      video: v19,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 20,
      title: "Video 20",
      video: v20,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 21,
      title: "Video 21",
      video: v21,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 22,
      title: "Video 22",
      video: v22,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 23,
      title: "Video 23",
      video: v23,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 24,
      title: "Video 24",
      video: v24,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 25,
      title: "Video 25",
      video: v25,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 26,
      title: "Video 26",
      video: v26,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 27,
      title: "Video 27",
      video: v27,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 28,
      title: "Video 28",
      video: v28,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 29,
      title: "Video 29",
      video: v29,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 30,
      title: "Video 30",
      video: v30,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 31,
      title: "Video 31",
      video: v31,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
    {
      id: 32,
      title: "Video 32",
      video: v32,
      likes: "1M",
      username: "Krishna",
      comments: "1M",
      caption: "BMW instagramreels"
    },
  ];


  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center w-full gap-20 bg-black'>
        {
          reels.map((reel) => (
            <div className="relative h-screen w- snap-start">
              <video
                // ref={videoRef}
                src={reel.video}
                loop
                // muted={isMuted} // Initialize muted state
                className="object-cover h-full "
                controls
              />

              {/* Overlay Content (Username, Caption, Likes) */}
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="font-bold">{reel.username}</p>
                <p>{reel.caption}</p>
                <div className="flex items-center space-x-2">
                  <span>❤️ {reel.likes}</span>
                  <span>💬 {reel.comments}</span>
                </div>
              </div>

              {/* Mute/Unmute Button */}

            </div>
          ))
        }
      </div>
    </>
  );
};

export default Reels;