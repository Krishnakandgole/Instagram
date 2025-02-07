import React from 'react';

function UserList({ users, onUserSelect }) {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Messages</h2>
            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="flex items-center p-3 hover:bg-gray-200 rounded-lg cursor-pointer"
                        onClick={() => onUserSelect(user.id)}
                    >
                        <img src={user.profilePic} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-gray-500 text-sm">{user.lastMessage}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
