import React, { useEffect, useState } from 'react';
import story1 from "../assets/img/krishna.jpeg";
import krishna from "../assets/img/krishna.jpeg";
import profile from "../assets/img/01.png";
import { NavLink } from "react-router-dom";
import "../App.css";
import { BookmarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { p12, p1, p13, p19, p9, p21, p11, p7, p5, p18, p16, p6, p4, p8, p22, p3, p2, p17, p15, p10, p14 } from './indeximg';
import { Header } from '../Components';

function Home({saveToPage}) {
    const [posts, setPosts] = useState([]);

    const suggestedUsers = [
        { username: 'latakulkarni91', followedBy: ['_kulkarni', '1 more'], profileImage: profile },
        { username: 'shubhamraj31_', followedBy: null, profileImage: profile },
        { username: 'mahadevh421', followedBy: ['ka_39_dattu', '4 m...'], profileImage: profile },
        { username: 'rudrayya443', followedBy: ['sachin_biradar_55', '...'], profileImage: profile },
        { username: 'madiga____boy__', followedBy: ['ka_39_nagesh_', '8 ...'], profileImage: profile }
    ];

    const stories = [
        { id: 1, name: "Krishna_vk", image: krishna },
        { id: 2, name: "Pradeep_panchal_18", image: profile },
        { id: 3, name: "KA_39_Prashant", image: p1 },
        { id: 4, name: "Prabhu_metre", image: p12 },
        { id: 5, name: "adity_n", image: p3 },
        { id: 6, name: "adtiy_p", image: p4 },
        { id: 7, name: "Arun_bhure", image: p5 },
        { id: 8, name: "KVK_DJ", image: p6 },
        { id: 9, name: "Guddi_biradar", image: profile },
        { id: 10, name: "Manshi_kuranle", image: p8 },
        { id: 11, name: "Its_Namu_more", image: p9 },
        { id: 12, name: "Naresh_birdar", image: p10 },
        { id: 13, name: "Om_biradar", image: p11 },
        { id: 14, name: "Prabhu_metre", image: p12 },
        { id: 15, name: "Ram_Patil", image: p13 },
        { id: 16, name: "Sachin_biradar", image: p14 },
        { id: 17, name: "Sainath_Birgonda", image: p15 },
        { id: 18, name: "Samrth_biradar", image: p16 },
        { id: 19, name: "Sangamesh_panchal", image: p17 },
    ];

    useEffect(() => {
        fetch('/API/Configer.json')
            .then((res) => res.json())
            .then((data) => setPosts(data.explore));
    }, []);

    return (
       <>
       <Header />
        <div className='w-full flex flex-col items-center bg-black text-white p-4'>
            {/* Stories Section */}
            <div className="flex gap-3 overflow-x-auto w-full max-w-3xl py-3">
                {stories.map(story => (
                    <div key={story.id} className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border-2 border-red-500 p-1">
                            <img src={story.image} alt={story.name} className="object-cover w-full h-full rounded-full" />
                        </div>
                        <p className="text-xs text-gray-400 mt-1 truncate w-14">{story.name}</p>
                    </div>
                ))}
            </div>

            {/* Posts Section */}
            <div className='lg:flex justify-center gap-20 w-full'>
                <div className="max-w-lg w-full space-y-6">
                    {posts.length > 0 && posts.map((post) => (
                        <div key={post.id} className="bg-gray-900 shadow-md rounded-md overflow-hidden">
                            <div className="flex items-center p-3">
                                <img src={story1} alt="User" className="w-10 h-10 rounded-full mr-3" />
                                <div>
                                    <span className="text-sm font-semibold">Krishna_vk</span>
                                    <span className="text-xs text-gray-400 ml-2">1h ago</span>
                                </div>
                            </div>

                            <img src={post.video} alt="Post" className="w-full h-auto object-cover" />

                            <div className="flex justify-between p-3">
                                <div className="flex gap-4">
                                    <button className="text-white hover:text-gray-600 text-xl"><i className="fa-regular fa-heart"></i></button>
                                    <button className="text-white hover:text-gray-600 text-xl">💬</button>
                                    <button className="text-white hover:text-gray-600">
                                        <PaperAirplaneIcon className="w-6 h-6" />
                                    </button>
                                </div>
                                <button className="text-white hover:text-gray-600">
                                    <BookmarkIcon className="w-6 h-6" onClick={()=>saveToPage(post)}/>
                                </button>
                            </div>

                            <div className="px-3 pb-3">
                                <span className="text-sm font-bold">{post.likes} likes</span>
                                <p className="text-sm text-gray-400">{post.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Suggested Users Section */}
                <div>
                    <div className="w-full max-w-lg mt-6">
                        <h2 className="text-sm font-semibold mb-3">Suggested for you</h2>
                        {suggestedUsers.map((user) => (
                            <div key={user.username} className="flex items-center justify-between mb-3">
                                <div className="flex items-center">
                                    <img src={user.profileImage} alt={user.username} className="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p className="text-sm font-semibold">{user.username}</p>
                                        {user.followedBy && (
                                            <p className="text-xs text-gray-400">Followed by {user.followedBy}</p>
                                        )}
                                    </div>
                                </div>
                                <button className="text-blue-500 text-sm font-semibold">Follow</button>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="text-gray-400 text-xs text-center mt-6">
                        <p>About • Help • Press • API • Jobs • Privacy • Terms</p>
                        <p>Location • Language • Meta Verified</p>
                        <p className="mt-2">© 2025 INSTAGRAM FROM META</p>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default Home;
