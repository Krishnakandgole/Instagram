import React from 'react';
import { Header } from '../Components';

function Notification() {
  const notifications = [
    {
      id: 1,
      user: { name: 'John Doe', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg' },
      type: 'like',
      timestamp: '1 hour ago',
      postImage: 'https://source.unsplash.com/random/200x200?sig=1'
    },
    {
      id: 2,
      user: { name: 'Jane Smith', profilePic: 'https://randomuser.me/api/portraits/women/2.jpg' },
      type: 'comment',
      timestamp: '2 hours ago',
      comment: 'Great shot!'
    },
    {
      id: 3,
      user: { name: 'Peter Jones', profilePic: 'https://randomuser.me/api/portraits/men/3.jpg' },
      type: 'follow',
      timestamp: '3 hours ago'
    },
    {
      id: 4,
      user: { name: 'Mary Brown', profilePic: 'https://randomuser.me/api/portraits/women/4.jpg' },
      type: 'like',
      timestamp: '4 hours ago',
      postImage: 'https://source.unsplash.com/random/200x200?sig=4'
    },
    {
      id: 5,
      user: { name: 'David Lee', profilePic: 'https://randomuser.me/api/portraits/men/5.jpg' },
      type: 'comment',
      timestamp: '5 hours ago',
      comment: 'Amazing!'
    },
    {
      id: 6,
      user: { name: 'Sarah Wilson', profilePic: 'https://randomuser.me/api/portraits/women/6.jpg' },
      type: 'follow',
      timestamp: '6 hours ago'
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-black w-full min-h-screen flex justify-center px-4 sm:px-10 md:px-20 lg:px-40 py-10">
        <ul className="w-full max-w-lg bg-gray-900 rounded-lg shadow-lg">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="p-4 border-b border-gray-700 hover:bg-gray-800 transition duration-200"
            >
              <div className="flex items-center space-x-3">
                <img src={notification.user.profilePic} alt={notification.user.name} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center">
                    <span className="font-medium text-white">{notification.user.name}</span>
                    <span className="text-gray-400 ml-1">{getNotificationText(notification)}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{notification.timestamp}</p>
                </div>
                {notification.type === 'like' && notification.postImage && (
                  <img src={notification.postImage} alt="Post" className="w-10 h-10 rounded-md object-cover ml-auto" />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function getNotificationText(notification) {
  switch (notification.type) {
    case 'like':
      return 'liked your post.';
    case 'comment':
      return `commented: "${notification.comment}"`;
    case 'follow':
      return 'started following you.';
    default:
      return 'Unknown notification type';
  }
}

export default Notification;
