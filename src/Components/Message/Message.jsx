import React, { useState } from 'react';
import { ChatWindow, UserList } from '../../Pages';
import Header from '../Header/Header';


const users = [
    { id: 1, name: 'John Doe', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', lastMessage: 'Hey! How are you?' },
    { id: 2, name: 'Jane Smith', profilePic: 'https://randomuser.me/api/portraits/women/2.jpg', lastMessage: 'See you later!' },
    { id: 3, name: 'Peter Jones', profilePic: 'https://randomuser.me/api/portraits/men/3.jpg', lastMessage: 'Okay, sounds good.' },
    { id: 4, name: 'Mary Brown', profilePic: 'https://randomuser.me/api/portraits/women/4.jpg', lastMessage: 'What are you up to?' },
    { id: 5, name: 'David Lee', profilePic: 'https://randomuser.me/api/portraits/men/5.jpg', lastMessage: 'Let\'s catch up soon!' },
    { id: 6, name: 'Sarah Wilson', profilePic: 'https://randomuser.me/api/portraits/women/6.jpg', lastMessage: 'I\'m looking forward to it.' },
    { id: 7, name: 'Michael Green', profilePic: 'https://randomuser.me/api/portraits/men/7.jpg', lastMessage: 'I hope you have a great day!' },
];

const messages = {
    1: [
        { id: 1, sender: 1, text: 'Hey! How are you?', timestamp: '10:00 AM' },
        { id: 2, sender: 2, text: 'I\'m doing great! Thanks for asking. How about you?', timestamp: '10:02 AM' },
        { id: 3, sender: 1, text: 'Not too bad. Just working on some stuff.', timestamp: '10:05 AM' },
    ],
    2: [
        { id: 4, sender: 2, text: 'Hey!  See you later!', timestamp: '10:00 AM' },
        { id: 5, sender: 1, text: 'Okay!', timestamp: '10:02 AM' },

    ],
    3: [
        { id: 6, sender: 3, text: 'Okay, sounds good.', timestamp: '10:00 AM' },
        { id: 7, sender: 1, text: 'Yes!', timestamp: '10:02 AM' },

    ],
    4: [
        { id: 8, sender: 4, text: 'What are you up to?', timestamp: '10:00 AM' },
        { id: 9, sender: 1, text: 'Nothing.', timestamp: '10:02 AM' },

    ],
    5: [
        { id: 10, sender: 5, text: 'Let\'s catch up soon!', timestamp: '10:00 AM' },
        { id: 11, sender: 1, text: 'Yes, of course', timestamp: '10:02 AM' },

    ],
    6: [
        { id: 12, sender: 6, text: 'I\'m looking forward to it.', timestamp: '10:00 AM' },
        { id: 13, sender: 1, text: 'Me too!', timestamp: '10:02 AM' },

    ],
    7: [
        { id: 14, sender: 7, text: 'I hope you have a great day!', timestamp: '10:00 AM' },
        { id: 15, sender: 1, text: 'You too, thanks!', timestamp: '10:02 AM' },

    ]
};


function Message() {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelect = (userId) => {
        setSelectedUser(userId);
    };

    return (
        <>
            <Header />
            <div className='bg-black h-screen w-full'>
                <div className="flex  bg-black h-[90%]">
                    {/* User List (Left Sidebar) */}
                    <div className=" m-auto border-r border-gray-200 overflow-y-auto ">
                        <UserList users={users} onUserSelect={handleUserSelect} />
                    </div>

                    {/* Chat Window (Right Side) */}
                    <div className="w-[50%]">
                        {selectedUser ? (
                            <ChatWindow userId={selectedUser} users={users} messages={messages[selectedUser]} />
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-500">
                                Select a user to start chatting
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;