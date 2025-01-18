import React, { useState, useEffect } from 'react';
import { Users, User as UserIcon, MessageCircle } from 'lucide-react';
import type { User, UserDetails } from '../types';

const PERSONALITY_QUESTIONS = [
  "How do you usually introduce yourself to new people?",
  "What tone do you typically use in conversations?",
  "How do you prefer to address people in a professional setting?",
  "Do you tend to use emojis or special characters in your messages? If so, which ones are your favorite?",
  "What's your favorite way to start a conversation?",
  "How do you engage in small talk, and what topics do you like to discuss?",
  "How do you keep a conversation flowing when someone gives a short response?",
  "How do you usually respond to compliments?",
  "If you're not interested in an offer, how do you politely decline?",
  "What's your preferred way of ending a conversation?",
  "Do you like to use humor in conversations? If yes, what kind of humor do you prefer?",
  "How often do you express emotions explicitly in your messages?",
  "What topics do you enjoy discussing the most?",
  "Are there any topics you usually avoid in conversations?",
  "When responding to a message, do you prefer keeping it concise or providing detailed answers?"
];

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://urbanbranch-backend.onrender.com/users');
      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const fetchUserDetails = async (userId: string) => {
    try {
      const response = await fetch(`https://urbanbranch-backend.onrender.com/users/${userId}`);
      const data = await response.json();
      setSelectedUser(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Users List */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li key={user.id}>
                    <button
                      onClick={() => fetchUserDetails(user.id)}
                      className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <UserIcon className="h-5 w-5 text-gray-400" />
                      <span className="ml-3 text-gray-700">{user.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* User Details */}
          <div className="lg:col-span-2">
            {selectedUser ? (
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedUser.user_info.personal_info).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg">
                        <dt className="text-sm font-medium text-gray-500 capitalize">
                          {key.replace(/_/g, ' ')}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personality Assessment */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Personality Assessment</h2>
                  <div className="space-y-4">
                    {PERSONALITY_QUESTIONS.map((question, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          {question}
                        </h4>
                        <p className="text-sm text-gray-600 italic">
                          {selectedUser.user_info.questionnaire_responses[index]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat History */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-6">
                    <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
                    <h2 className="text-xl font-semibold text-gray-900">Chat History</h2>
                  </div>
                  <div className="space-y-4">
                    {selectedUser.user_info.chat_history.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="text-sm">{message.message}</p>
                        </div>
                      </div>
                    ))}
                    {selectedUser.user_info.chat_history.messages.length === 0 && (
                      <p className="text-center text-gray-500 italic">No chat history available</p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-64">
                <p className="text-gray-500">Select a user to view their details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}