// components/CreatePost.jsx
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { Header } from '../Components';

function Create() {

  const [postData, setPostData] = useState({
    image: "",
    texts: ""
  });

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData, [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(postData);
    // Add your post data to your database here.
    toast.success("Success! Your booking table", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };
  const [borderColor, setBorderColor] = useState('border-blue-500');
  const colors = ['border-blue-500', 'border-green-500', 'border-yellow-500', 'border-red-500', 'border-purple-500'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random index to pick a color
      const randomIndex = Math.floor(Math.random() * colors.length);
      setBorderColor(colors[randomIndex]);
    }, 1500); // Change color every 1.5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <div className='w-full bg-black h-screen flex items-center justify-center'>
        <form onSubmit={handleSubmit} className={`p-8 rounded-lg shadow-lg ${borderColor} border-4 transition-colors duration-1000 bg-black`}>
          {/* Image Upload */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-white text-sm font-bold mb-2">
              Select Image:
            </label>
            <input
              type="file"
              id="image"
              // accept="image/*"
              value={postData.image}
              onChange={handleImageChange}
              name="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {/* {image && (
            <img src={image} alt="Preview" className="mt-2 rounded-md max-h-48 object-cover w-full" />
          )} */}
          </div>

          {/* Caption Input */}
          <div className="mb-6">
            <label htmlFor="caption" className="block text-white text-sm font-bold mb-2">
              Caption:
            </label>
            <textarea
              name='texts'
              id="caption"
              value={postData.texts}
              onChange={handleImageChange}
              rows="3"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Write a caption..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Post
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Create;