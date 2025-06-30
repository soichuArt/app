import React, { useState, useEffect } from 'react';
import { Bell, X, Calendar, BookOpen, Heart, Star } from 'lucide-react';

interface Notification {
  id: string;
  type: 'ritual' | 'content' | 'lunar' | 'session' | 'inspiration' | 'community';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'ritual',
      title: 'Daily Connection',
      message: "It's time for your connection ritual.",
      timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
      read: false,
    },
    {
      id: '2',
      type: 'lunar',
      title: 'New Moon Energy',
      message: 'New Moon: find the ritual to plant your intention.',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      read: false,
    },
    {
      id: '3',
      type: 'content',
      title: 'New Meditation Available',
      message: "We've added a new guided meditation.",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      read: true,
    },
    {
      id: '4',
      type: 'inspiration',
      title: "Today's Message",
      message: 'Trust the silence.',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      read: true,
    },
  ]);

  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'ritual': return Heart;
      case 'content': return BookOpen;
      case 'lunar': return Star;
      case 'session': return Calendar;
      case 'inspiration': return Star;
      case 'community': return Calendar;
      default: return Bell;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  // Simulate receiving new notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const inspirationalMessages = [
        'Breathe deeply and ground yourself in your intention.',
        'What roots, blossoms.',
        'Trust the silence.',
        'Find stillness in the sacred moment.',
        'Your creative energy is awakening.',
      ];

      const randomMessage = inspirationalMessages[Math.floor(Math.random() * inspirationalMessages.length)];
      
      // Only add notification occasionally (10% chance every 30 seconds)
      if (Math.random() < 0.1) {
        const newNotification: Notification = {
          id: Date.now().toString(),
          type: 'inspiration',
          title: "Sacred Reminder",
          message: randomMessage,
          timestamp: new Date(),
          read: false,
        };

        setNotifications(prev => [newNotification, ...prev.slice(0, 9)]); // Keep only 10 notifications
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative p-2 text-gray-500 hover:text-soichu-600 transition duration-200"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-soichu-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {showNotifications && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-light text-gray-700">Notifications</h3>
              <button
                onClick={() => setShowNotifications(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-500 font-light">
                No notifications yet
              </div>
            ) : (
              notifications.map((notification) => {
                const IconComponent = getNotificationIcon(notification.type);
                return (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition duration-200 ${
                      !notification.read ? 'bg-soichu-50/30' : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className={`p-2 rounded-full ${
                          notification.type === 'ritual' ? 'bg-red-100' :
                          notification.type === 'lunar' ? 'bg-purple-100' :
                          notification.type === 'content' ? 'bg-blue-100' :
                          'bg-soichu-100'
                        }`}>
                          <IconComponent className={`h-4 w-4 ${
                            notification.type === 'ritual' ? 'text-red-600' :
                            notification.type === 'lunar' ? 'text-purple-600' :
                            notification.type === 'content' ? 'text-blue-600' :
                            'text-soichu-600'
                          }`} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-light text-gray-700 truncate">
                            {notification.title}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeNotification(notification.id);
                            }}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 font-light mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 font-light mt-2">
                          {formatTime(notification.timestamp)}
                        </p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-soichu-600 rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
                className="w-full text-sm text-soichu-600 hover:text-soichu-700 font-light"
              >
                Mark all as read
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;