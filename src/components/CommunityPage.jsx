import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import Post from './Post';

const CommunityPage = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            username: 'John Doe',
            profilePic: 'https://via.placeholder.com/40',
            content: 'This is a sample post content.',
        },
        {
            id: 2,
            username: 'Jane Smith',
            profilePic: 'https://via.placeholder.com/40',
            content: 'Another example of a post.',
        },
        {
            id: 3,
            username: 'Alice Johnson',
            profilePic: 'https://via.placeholder.com/40',
            content: 'Yet another interesting post.',
        },
        {
            id: 4,
            username: 'Robert Brown',
            profilePic: 'https://via.placeholder.com/40',
            content: 'Some insightful content shared here.',
        },
        {
            id: 5,
            username: 'Emily Davis',
            profilePic: 'https://via.placeholder.com/40',
            content: 'A wonderful post with lots of information.',
        },
    ]);

    const memberProfiles = [
        'https://via.placeholder.com/40',
        'https://via.placeholder.com/40',
        'https://via.placeholder.com/40',
        'https://via.placeholder.com/40',
        'https://via.placeholder.com/40',
    ];

    const volunteers = [
        {
            id: 1,
            name: 'Michael Scott',
            profilePic: 'https://via.placeholder.com/40',
            state: 'Pennsylvania',
            country: 'USA',
            flag: '🇺🇸',
        },
        {
            id: 2,
            name: 'Pam Beesly',
            profilePic: 'https://via.placeholder.com/40',
            state: 'Pennsylvania',
            country: 'USA',
            flag: '🇺🇸',
        },
    ];

    const trainers = [
        {
            id: 1,
            name: 'Dwight Schrute',
            profilePic: 'https://via.placeholder.com/40',
            state: 'Pennsylvania',
            country: 'USA',
            flag: '🇺🇸',
        },
        {
            id: 2,
            name: 'Jim Halpert',
            profilePic: 'https://via.placeholder.com/40',
            state: 'Pennsylvania',
            country: 'USA',
            flag: '🇺🇸',
        },
    ];

    const handleDeletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    return (
        <div className="min-h-screen flex justify-center items-start p-4 ml-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center w-full max-w-6xl">
                <div className="max-w-2xl w-full p-4 bg-teal-500 shadow-lg rounded-lg mx-auto lg:mx-0">
                    <h1 className="text-2xl font-bold mb-4 text-center">CyberPeace Core Community</h1>
                    <p className="mb-4 text-center">
                        One of the most important people management skills you can develop is the ability to lead effectively. Effective leaders motivate their team to do great. Keep in mind that relating to others doesn’t mean you’re a pushover. It just means that you can see where the other person is coming from.
                    </p>
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex -space-x-4">
                            {memberProfiles.map((profile, index) => (
                                <img
                                    key={index}
                                    src={profile}
                                    alt="member profile"
                                    className="w-10 h-10 rounded-full border-4 border-white"
                                />
                            ))}
                        </div>
                        <span className="ml-4 text-lg font-medium">& 2434 members</span>
                    </div>
                    {posts.map((post) => (
                        <Post key={post.id} post={post} onDelete={handleDeletePost} />
                    ))}
                </div>
                <div className="flex flex-col space-y-4 mt-4 lg:mt-0 lg:ml-8 w-full lg:w-auto">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-xl font-bold mb-2">Volunteers</h2>
                        {volunteers.map((volunteer) => (
                            <div key={volunteer.id} className="flex items-center mb-2">
                                <img
                                    src={volunteer.profilePic}
                                    alt="volunteer profile"
                                    className="w-10 h-10 rounded-full mr-2"
                                />
                                <div>
                                    <p className="font-semibold">{volunteer.name}</p>
                                    <p className="text-sm text-gray-600">  <FontAwesomeIcon icon={faFlag} className="text-xs" />   {volunteer.state}, {volunteer.country} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-xl font-bold mb-2">Trainers</h2>
                        {trainers.map((trainer) => (
                            <div key={trainer.id} className="flex items-center mb-2">
                                <img
                                    src={trainer.profilePic}
                                    alt="trainer profile"
                                    className="w-10 h-10 rounded-full mr-2"
                                />
                                <div>
                                    <p className="font-semibold">{trainer.name}</p>
                                    <p className="text-sm text-gray-600 gap-1"> <FontAwesomeIcon icon={faFlag} className="text-xs" />    {trainer.state}, {trainer.country} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;
