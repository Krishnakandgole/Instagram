import React, { useEffect, useState } from 'react';
import { Header } from '../Components';

function Search() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await fetch('/API/Configer.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data.profiles);
      setFiltered(data.profiles); // Initialize filtered data with all users
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtering = users.filter((item) =>
      item.name.toLowerCase().includes(term)
    );
    setFiltered(filtering);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to highlight searched text
  const highlightText = (text) => {
    if (!searchTerm) return text;

    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="bg-yellow-400 text-black px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <Header />
      <div className="bg-black w-full min-h-screen flex flex-col items-center p-4 md:p-10">
        {/* Search Input */}
        <div className="w-full max-w-3xl mb-6">
          <input
            type="search"
            placeholder="Search user..."
            value={searchTerm}
            onChange={handleChange}
            className="placeholder-gray-400 text-xl font-bold p-2 w-full border-2 rounded bg-transparent text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* User List */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto">
          {filtered.length > 0 ? (
            filtered.map((user) => (
              <div
                key={user.id}
                className="bg-gray-800 p-4 rounded-lg flex items-center gap-4 shadow-md"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {highlightText(user.name)}
                  </h2>
                  <p className="text-gray-300">{user.bio}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center w-full col-span-full">
              No users found
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
