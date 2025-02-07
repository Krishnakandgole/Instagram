import React from 'react';

function ChatWindow({ userId, users, messages }) {
    const user = users.find(user => user.id === userId);

    if (!user) {
        return <div>Loading...</div>; // Or handle the error appropriately
    }

    return (
        <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center">
                <img src={user.profilePic} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                <h2 className="text-lg font-semibold">{user.name}</h2>
            </div>

            {/* Chat Messages */}
            <div className="p-4 overflow-y-auto flex-grow">
                {messages && messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-2 p-2 rounded-lg max-w-xs ${message.sender === userId ? 'bg-blue-100 ml-auto text-right' : 'bg-gray-100 mr-auto'
                            }`}
                    >
                        <p>{message.text}</p>
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
            </div>
        </div>
    );
}

export default ChatWindow;
