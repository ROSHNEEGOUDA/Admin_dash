import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Induction = () => {
    const [submissions, setSubmissions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const [locationFilter, setLocationFilter] = useState(null); // State to store the selected location filter

    useEffect(() => {
        // Generate additional submission data
        const generateSubmissions = () => {
            const data = [];
            for (let i = 1; i <= 50; i++) {
                data.push({
                    name: `User ${i}`,
                    status: i % 2 === 0 ? "Submitted" : "Not Submitted",
                    submissionDate: `2024-05-${Math.floor(Math.random() * 30) + 1}`,
                    sessionRating: Math.floor(Math.random() * 5) + 1,
                });
            }
            setSubmissions(data);
        };

        generateSubmissions();
    }, []);

    useEffect(() => {
        const Block1Ctx = document.getElementById("Block1Chart").getContext("2d");
        const Block1Chart = new Chart(Block1Ctx, {
            type: "doughnut",
            data: {
                labels: ["No. activities being done", "No. of activities not done"],
                datasets: [
                    {
                        label: "",
                        data: [60, 40],
                        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
                        hoverOffset: 4,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });

        return () => {
            Block1Chart.destroy();
        };
    }, []);

    // Function to filter classes based on location
    const filterClassesByLocation = (location) => {
        setLocationFilter(location);
    };

    // Function to render star ratings
    const renderStarRating = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
        }
        return stars;
    };

    // Pagination logic
    const getTotalPages = () => {
        return Math.ceil(submissions.length / rowsPerPage);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Render table rows based on current page
    const renderTableRows = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const rows = submissions.slice(startIndex, endIndex);

        return rows.map((submission, index) => (
            <tr key={index}>
                <td className="px-4 py-2">{submission.name}</td>
                <td className="px-4 py-2">{submission.status}</td>
                <td className="px-4 py-2">{submission.submissionDate}</td>
                <td className="px-4 py-2">{renderStarRating(submission.sessionRating)}</td>
                <td className="px-4 py-2">Lorem ipsum dolor sit amet consectetur.</td>
                <td className="px-4 py-2 text-center">
                    {submission.status === "Submitted" ? "✔️" : ""}
                </td>
                <td className="px-4 py-2 text-center">
                    {submission.status === "Submitted" ? "" : "❌"}
                </td>
                <td className="px-4 py-2 w-32">
                    <Link to="/details">
                        <div className=" w-32 text-blue-400 bg-slate-200 rounded-md shadow-md  trasition transform duration-200 ease-in-out hover active:scale-90">
                            <h2 className="ml-2">Click here
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="text-xl relative ml-7"
                                    style={{ transform: "rotate(-45deg)" }}
                                />
                            </h2>
                        </div>
                    </Link>
                </td>
            </tr>
        ));
    };

    // Function to render upcoming classes based on the location filter
    const renderUpcomingClasses = () => {
        const upcomingClasses = [
            {
                title: "Introduction to React",
                date: "May 20, 2024",
                time: "10:00 AM - 12:00 PM",
                trainer: "John Doe",
                location: "In-Person"
            },
            {
                title: "JavaScript Basics",
                date: "May 22, 2024",
                time: "2:00 PM - 4:00 PM",
                trainer: "Jane Smith",
                location: "Virtual"
            },
            {
                title: "CSS Styling Techniques",
                date: "May 25, 2024",
                time: "9:00 AM - 11:00 AM",
                trainer: "Alex Johnson",
                location: "In-Person"
            }
            // Add more upcoming classes as needed
        ];

        let filteredClasses = upcomingClasses;
        if (locationFilter) {
            filteredClasses = upcomingClasses.filter((classInfo) => classInfo.location === locationFilter);
        }
        return filteredClasses.map((classInfo, index) => (
            <li key={index} className="py-2">
                <h3 className="text-lg font-semibold">{classInfo.title}</h3>
                <p className="text-gray-600">Date: {classInfo.date}</p>
                <p className="text-gray-600">Time: {classInfo.time}</p>
                <p className="text-gray-600">Trainer: {classInfo.trainer}</p>
                <p className="text-gray-600">Location: {classInfo.location}</p>
            </li>
        ));
    };

    // Render pagination
    const renderPagination = () => {
        const totalPages = getTotalPages();
        const maxVisiblePages = 3; // Maximum number of visible pages
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
        startPage = Math.max(1, endPage - maxVisiblePages + 1);

        const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

        return (
            <div className="flex items-center mt-4 justify-end space-x-2">
                {/* Previous page arrow */}
                <button
                    className="px-3 py-1 rounded-md bg-gray-300 disabled:opacity-50"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {"<"}
                </button>

                {/* Page numbers */}
                {pages.map((page) => (
                    <button
                        key={page}
                        className={`px-3 py-1 rounded-md ${currentPage === page ? "font-semibold bg-blue-500 text-white" : "bg-gray-300"
                            }`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                {/* Next page arrow */}
                <button
                    className="px-3 py-1 rounded-md bg-gray-300 disabled:opacity-50"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    {">"}
                </button>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3">
                    <h1 className="ml-7 mt-5 text-xl lg:text-2xl">Dashboard/Approve</h1>
                    {/* Block 1 */}
                    <div className="bg-blue-500 mx-4 h-28 my-10 rounded-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-xl">
                        <div className="text-center mt-7">
                            <h1 className="text-xl sm:text-2xl font-semibold">100</h1>
                            <h3>No. of Registered members</h3>
                        </div>
                        <div className="text-center mt-7">
                            <h1 className="text-xl sm:text-2xl font-semibold">70</h1>
                            <h3>Ongoing Induction</h3>
                        </div>
                        <div className="text-center mt-7">
                            <h1 className="text-xl sm:text-2xl font-semibold">30</h1>
                            <h3>Total number of volunteers</h3>
                        </div>
                        <div className="text-center mt-7">
                            <h1 className="text-xl sm:text-2xl font-semibold">50</h1>
                            <h3>Total number of trainers</h3>
                        </div>
                    </div>
                    {/* Block 2 */}
                    <div className="bg-slate-300 mx-4 my-10 rounded-3xl p-4">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div>
                                    <h1 className="text-2xl font-semibold">Part A</h1>
                                    <h2 className="font-semibold text-xl ml-5">70</h2>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-semibold">Part B</h1>
                                    <h2 className="font-semibold text-xl ml-5">90</h2>
                                </div>
                            </div>
                            <Link to="/planA">
                                <div className="border border-black rounded-2xl shadow-xl h-12 w-44 flex items-center justify-center transition transform duration-200 ease-in-out active:scale-95">
                                    <h1 className="text-lg sm:text-xl font-semibold">View detail</h1>
                                </div>
                            </Link>
                        </div>
                        {/* Chart */}
                        <div className="flex justify-center items-center h-52 mt-10">
                            <canvas id="Block1Chart" className="w-full h-full"></canvas>
                        </div>
                    </div>
                </div>
                {/* Upcoming classes */}
                <div className="lg:w-1/3 mt-10 lg:mt-0 lg:ml-4 h-[550px] relative">
                    {/* + Button */}
                    <div className="absolute top-0 right-0 mt-2 mr-2">
                        <Link to="/createSession"><div className=" text-black w-8 h-8 flex items-center justify-center rounded-full text-3xl font-semibold">+</div></Link>
                    </div>
                    <div className="bg-gray-200 h-full rounded-3xl p-6">
                        <h2 className="text-center text-2xl font-semibold mb-4">Upcoming Classes</h2>
                        {/* Location filter */}
                        <div className="flex justify-between mb-4">
                            <button
                                className={`${locationFilter === null ? 'bg-blue-500 text-white' : 'bg-gray-300'} px-4 py-2 rounded-md`}
                                onClick={() => filterClassesByLocation(null)}
                            >
                                All
                            </button>
                            <button
                                className={`${locationFilter === 'Virtual' ? 'bg-blue-500 text-white' : 'bg-gray-300'} px-4 py-2 rounded-md`}
                                onClick={() => filterClassesByLocation('Virtual')}
                            >
                                Virtual
                            </button>
                            <button
                                className={`${locationFilter === 'In-Person' ? 'bg-blue-500 text-white' : 'bg-gray-300'} px-4 py-2 rounded-md`}
                                onClick={() => filterClassesByLocation('In-Person')}
                            >
                                In-Person
                            </button>
                        </div>
                        {/* List of upcoming classes */}
                        <div className="overflow-y-auto">
                            <ul className="divide-y divide-gray-400">
                                {renderUpcomingClasses()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className="overflow-x-auto">
                    <h2 className="text-lg font-semibold mb-4">Submission Table</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-green-400">
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Status</th>
                                    <th className="px-4 py-2 text-left">Submission Date</th>
                                    <th className="px-4 py-2 text-left">Session Rating</th>
                                    <th className="px-4 py-2 text-left">Response</th>
                                    <th className="px-4 py-2 w-32">Approve</th>
                                    <th className="px-4 py-2 w-32">Reject</th>
                                    <th className="px-4 py-2 w-32">Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableRows()}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-5 mb-5">
                        {renderPagination()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Induction;
