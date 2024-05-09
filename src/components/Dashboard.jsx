import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChalkboardTeacher, faCheckCircle, faTasks } from '@fortawesome/free-solid-svg-icons';
import WorldMap from "../assets/dotted-world-map4757.jpg";

const Dashboard = () => {
    const chartRef = useRef(null);
    let doughnutChart = null; // Variable to hold the chart instance

    // State variables to store the current counts
    const [volunteersCount, setVolunteersCount] = useState(0);
    const [trainersCount, setTrainersCount] = useState(0);
    const [trainingCount, setTrainingCount] = useState(0);
    const [activitiesCount, setActivitiesCount] = useState(0);

    // Function to animate the counting effect
    const animateCount = (targetCount, setCountFunc) => {
        let count = 0;
        const interval = setInterval(() => {
            count += 1;
            setCountFunc(count);
            if (count === targetCount) clearInterval(interval);
        }, 10); // Adjust the interval as needed
    };

    useEffect(() => {
        // Animate the counting effect for each block
        animateCount(500, setVolunteersCount);
        animateCount(50, setTrainersCount);
        animateCount(300, setTrainingCount);
        animateCount(1000, setActivitiesCount);

        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            // Check if a chart instance already exists
            if (doughnutChart) {
                doughnutChart.destroy(); // Destroy the existing chart
            }

            // Generate random percentages
            const randomPercentages = Array.from({ length: 3 }, () => Math.floor(Math.random() * 100));

            // Create a new chart instance
            doughnutChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Red', 'Blue', 'Yellow'],
                    datasets: [{
                        label: 'Dataset',
                        data: randomPercentages,
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false // Hide legend
                        },
                        doughnutLabel: {
                            labels: [
                                {
                                    text: 'Red',
                                    color: 'rgb(255, 99, 132)',
                                },
                                {
                                    text: 'Blue',
                                    color: 'rgb(54, 162, 235)',
                                },
                                {
                                    text: 'Yellow',
                                    color: 'rgb(255, 205, 86)',
                                },
                            ],
                            font: {
                                size: '20'
                            }
                        }
                    },
                    layout: {
                        padding: {
                            left: 60, // Adjust left padding
                            right: 50,
                            top: 50,
                            bottom: 50
                        }
                    }
                }
            });
        }

        // Cleanup function
        return () => {
            if (doughnutChart) {
                doughnutChart.destroy(); // Destroy the chart when component unmounts
            }
        };
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Block 1: Total no of volunteers */}
                <div className="bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold mb-2">Total no of volunteers</h2>
                    {/* Display total number of volunteers */}
                    <p className="text-xl font-bold">{volunteersCount}</p>
                    {/* Font Awesome icon */}
                    <FontAwesomeIcon icon={faUsers} className="text-2xl mt-2" />
                </div>

                {/* Block 2: No.of Trainers */}
                <div className="bg-green-200 p-4 rounded-lg flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold mb-2">No.of Trainers</h2>
                    {/* Display number of trainers */}
                    <p className="text-xl font-bold">{trainersCount}</p>
                    {/* Font Awesome icon */}
                    <FontAwesomeIcon icon={faChalkboardTeacher} className="text-2xl mt-2" />
                </div>

                {/* Block 3: Completed Mandatory Training */}
                <div className="bg-yellow-200 p-4 rounded-lg flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold mb-2">Completed Mandatory Training</h2>
                    {/* Display number of completed mandatory training */}
                    <p className="text-xl font-bold">{trainingCount}</p>
                    {/* Font Awesome icon */}
                    <FontAwesomeIcon icon={faCheckCircle} className="text-2xl mt-2" />
                </div>

                {/* Block 4: Total no. of activities */}
                <div className="bg-pink-200 p-4 rounded-lg flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold mb-2">Total no. of activities</h2>
                    {/* Display total number of activities */}
                    <p className="text-xl font-bold">{activitiesCount}</p>
                    {/* Font Awesome icon */}
                    <FontAwesomeIcon icon={faTasks} className="text-2xl mt-2" />
                </div>
            </div>

            {/* Second Row: World Map and Languages */}
            <div className="flex mt-8 h-full">
                {/* Block 5: World Map */}
                <div className="bg-purple-200 p-8 rounded-lg flex flex-col justify-center items-center" style={{ width: "75%", height: "60vh" }}>
                    <h2 className="text-lg font-semibold mb-4"></h2>
                    {/* Insert world map component here */}
                    <div className="w-full h-full bg-gray-500">
                        <img src={WorldMap} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    </div>
                </div>

                {/* Block 6: Languages */}
                <div className="bg-orange-200 p-8 rounded-lg flex flex-col ml-4" style={{ width: "25%" }}>
                    <h2 className="text-lg font-semibold mb-4">Languages</h2>
                    {/* Insert languages component here */}
                    <ul className="font-[500] text-ls">
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Spanish</li>
                        {/* Add more languages as needed */}
                    </ul>
                </div>
            </div>

            {/* Third Row: Additional Blocks */}
            <div className="grid grid-cols-3 gap-4 mt-8">
                {/* Block 7 */}
                <div className="bg-yellow-200 p-4 rounded-lg flex flex-col justify-center items-center" style={{ height: "400px" }}>
                    <h2 className="text-lg font-semibold mt-2">Engagement</h2>
                    <canvas ref={chartRef}></canvas>
                </div>

                {/* Block 8 */}
                <div className="bg-green-200 p-4 rounded-lg flex flex-col justify-center items-center" style={{ height: "400px" }}>
                    <h2 className="text-lg font-semibold mb-2">Block 8</h2>
                    <p className="text-xl font-bold">Content 8</p>
                </div>

                {/* Block 9 */}
                <div className="bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center" style={{ height: "400px" }}>
                    <h2 className="text-lg font-semibold mb-2">Block 9</h2>
                    <p className="text-xl font-bold">Content 9</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
