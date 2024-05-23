import React, { act, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const ManagePage = () => {
    const [activeTab, setActiveTab] = useState(()=>{
        const storedTab = localStorage.getItem('activeTab');
        return storedTab || 'Courses'
    });

    useEffect(()=>{
        localStorage.setItem('activeTab', activeTab);
    },[activeTab]);

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 20;

    // Example data for table rows
    const tableData1 = [
        { name: "Volunteer Name 1", type: "Volunteer", date: "2024-05-15", status: "Approved", language: "English", people: "10" },
        { name: "Volunteer Name 2", type: "Trainer", date: "2024-05-15", status: "Approved", language: "Hindi", people: "20" },
        // Add more rows as needed
    ];
    const tableData2 = [
        // Add more rows as needed
    ];
    const tableData3 = [
        // Add more rows as needed
    ];

    const getRandomNumber = (min, max) => {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    };
    // Additional 197 random rows
    const getRandomLanguage = () => {
        const languages = ["English", "Hindi", "Spanish", "French", "German", "Chinese", "Japanese", "Arabic"];
        const randomIndex = Math.floor(Math.random() * languages.length);
        return languages[randomIndex];
    };

    for (let i = 3; i < 200; i++) {
        tableData1.push({
            name: `Volunteer Name ${i}`,
            type: Math.random() < 0.5 ? "Volunteer" : "Trainer",
            date: "2024-05-15",
            status: Math.random() < 0.5 ? "Approved" : "Rejected",
            language: getRandomLanguage(),
            people: getRandomNumber(0, 100),
        });
    }
    for (let i = 1; i < 200; i++) {
        tableData2.push({
            name: `Activites ${i}`,
            type: Math.random() < 0.5 ? "Volunteer" : "Trainer",
            date: "1 hr",
            status: Math.random() < 0.5 ? "Active" : "Not-Active",
            language: getRandomLanguage(),
            people: getRandomNumber(0, 100),
        });
    }
    for (let i = 1; i < 200; i++) {
        tableData3.push({
            name: `Resourse ${i}`,
            type: Math.random() < 0.5 ? "Policy & Advocacy" : "CPC Verticals",
            date: "1 hr",
            status: Math.random() < 0.5 ? "Blog" : "Videos",
            language: getRandomLanguage(),
            people: getRandomNumber(0, 100),
        });
    }

    const getTotalPages = () => {
        return Math.ceil(tableData1.length / rowsPerPage);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPagination = () => {
        const totalPages = getTotalPages();
        const maxVisiblePages = 3; // Maximum number of visible pages
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
        startPage = Math.max(1, endPage - maxVisiblePages + 1);

        const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

        return (
            <div className="flex items-center mt-4 mr-4 justify-end">
                {/* Previous page arrow */}
                <button
                    className="mr-2 px-3 py-1 rounded-md bg-gray-300"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {"<"}
                </button>

                {/* Page numbers */}
                {pages.map((page) => (
                    <button
                        key={page}
                        className={`mr-2 px-3 py-1 rounded-md ${currentPage === page ? "font-semibold bg-blue-500 text-white" : "bg-gray-300"
                            }`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                {/* Next page arrow */}
                <button
                    className="mr-2 px-3 py-1 rounded-md bg-gray-300"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    {">"}
                </button>
            </div>
        );
    };

    const renderTableRows = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const rows1 = tableData1.slice(startIndex, endIndex);

        return rows1.map((row, index) => (
            <tr key={index} className="bg-slate-100 mt-2 rounded-md">
                <td className="px-4 py-2 text-center">{row.name}</td>
                <td className="px-4 py-2 text-center">{row.type}</td>
                <td className="px-4 py-2 text-center">{row.date}</td>
                <td className="px-4 py-2 text-center">{row.status}</td>
                <td className="px-4 py-2 text-center">{row.language}</td>
                <td className="px-4 py-2 text-center">{row.people}</td>
                <td className="px-4 py-2 w-32">
                    <Link to="/">
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
                <td className="px-4 py-2 w-32 text-center">Edit</td>
                <td className="px-4 py-2 w-32 text-center">delete</td>
            </tr>
        ));
    };
    const renderTableRows2 = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const rows1 = tableData2.slice(startIndex, endIndex);

        return rows1.map((row, index) => (
            <tr key={index} className="bg-slate-100 mt-2 rounded-md">
                <td className="px-4 py-2 text-center">{row.name}</td>
                <td className="px-4 py-2 text-center">{row.type}</td>
                <td className="px-4 py-2 text-center">{row.date}</td>
                <td className="px-4 py-2 text-center">{row.status}</td>
                <td className="px-4 py-2 text-center">{row.language}</td>
                <td className="px-4 py-2 text-center">{row.people}</td>
                <td className="px-4 py-2 w-32">
                    <Link to="/">
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
                <td className="px-4 py-2 w-32 text-center">Edit</td>
                <td className="px-4 py-2 w-32 text-center">delete</td>
            </tr>
        ));
    };
    const renderTableRows3 = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const rows1 = tableData3.slice(startIndex, endIndex);

        return rows1.map((row, index) => (
            <tr key={index} className="bg-slate-100 mt-2 rounded-md">
                <td className="px-4 py-2 text-center">{row.name}</td>
                <td className="px-4 py-2 text-center">{row.type}</td>
                <td className="px-4 py-2 text-center">{row.date}</td>
                <td className="px-4 py-2 text-center">{row.status}</td>
                <td className="px-4 py-2 text-center">{row.language}</td>
                <td className="px-4 py-2 w-32">
                    <Link to="/">
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
                <td className="px-4 py-2 w-32 text-center">Edit</td>
                <td className="px-4 py-2 w-32 text-center">delete</td>
            </tr>
        ));
    };

    const data = {
        labels: ['Courses', 'Activities', 'Resources'],
        datasets: [
            {
                label: 'Distribution',
                data: [10, 20, 30],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            },
        },
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Courses':
                return <div>
                    <div className="flex justify-end mb-4">
                        <Link to="/create-course">
                            <button className="px-4 py-2 bg-sky-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none">
                                Create a New Course
                            </button>
                        </Link>
                    </div>
                    <div className="flex mx-2 overflow-x-auto">
                        <div className="w-full">
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="bg-green-400">
                                            <th className="px-4 py-2 text-center">Name</th>
                                            <th className="px-4 py-2 text-center">Catagory</th>
                                            <th className="px-4 py-2 text-center">Course timeline</th>
                                            <th className="px-4 py-2 text-center">Status</th>
                                            <th className="px-4 py-2 text-center">Language</th>
                                            <th className="px-4 py-2 w-32 text-center">No. of people completed</th>
                                            <th className="px-4 py-2 w-32 text-center">Details</th>
                                            <th className="px-4 py-2 w-32"></th>
                                            <th className="px-4 py-2 w-32"></th>
                                            {/* <th className="px-4 py-2 w-32"></th> */}
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
                </div>;
            case 'Activities':
                return <div>
                    <div className="flex justify-end mb-4">
                        <Link to="/create-course">
                            <button className="px-4 py-2 bg-sky-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none">
                                Create a New Activities
                            </button>
                        </Link>
                    </div>
                    <div className="flex mx-2 overflow-x-auto">
                        <div className="w-full">
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="bg-green-400">
                                            <th className="px-4 py-2 text-center">Name</th>
                                            <th className="px-4 py-2 text-center">Catagory</th>
                                            <th className="px-4 py-2 text-center">Course timeline</th>
                                            <th className="px-4 py-2 text-center">Status</th>
                                            <th className="px-4 py-2 text-center">Language</th>
                                            <th className="px-4 py-2 w-32 text-center">No. of people completed</th>
                                            <th className="px-4 py-2 w-32 text-center">Details</th>
                                            <th className="px-4 py-2 w-32"></th>
                                            <th className="px-4 py-2 w-32"></th>
                                            {/* <th className="px-4 py-2 w-32"></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderTableRows2()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-5 mb-5">
                                {renderPagination()}
                            </div>
                        </div>
                    </div>
                </div>;
            case 'Resources':
                return <div>
                    <div className="flex justify-end mb-4">
                        <Link to="/create-course">
                            <button className="px-4 py-2 bg-sky-600 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none">
                                Create a New Resourses
                            </button>
                        </Link>
                    </div>
                    <div className="flex mx-2 overflow-x-auto">
                        <div className="w-full">
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="bg-green-400">
                                            <th className="px-4 py-2 text-center">Name</th>
                                            <th className="px-4 py-2 text-center">Catagory</th>
                                            <th className="px-4 py-2 text-center">Type</th>
                                            <th className="px-4 py-2 text-center">Status</th>
                                            <th className="px-4 py-2 text-center">Language</th>
                                            <th className="px-4 py-2 w-32">Details</th>
                                            <th className="px-4 py-2 w-32"></th>
                                            <th className="px-4 py-2 w-32"></th>
                                            {/* <th className="px-4 py-2 w-32"></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderTableRows3()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-5 mb-5">
                                {renderPagination()}
                            </div>
                        </div>
                    </div>
                </div>;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen p-4 bg-gray-100">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-4 mb-8">
                <div className="w-full lg:w-1/2 bg-emerald-400 p-4 shadow-lg rounded-2xl mb-4 lg:mb-0 h-32">
                    <div className="grid grid-cols-3 gap-4 justify-center mt-6">
                        <div className='col-span-1 text-center'>
                            <h1 className='text-2xl font-semibold'>200</h1>
                            <h2>Total Activities</h2>
                        </div>
                        <div className='col-span-1 text-center'>
                            <h1 className='text-2xl font-semibold'>07</h1>
                            <h2>Total Courses</h2>
                        </div>
                        <div className='col-span-1 text-center'>
                            <h1 className='text-2xl font-semibold'>50</h1>
                            <h2>Resources</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 rounded-lg h-40 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                        <Doughnut data={data} options={options} />
                    </div>
                </div>
            </div>
            <nav className="flex justify-start space-x-4 mb-8">
                <span
                    className={`cursor-pointer ${activeTab === 'Courses' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('Courses')}
                >
                    Courses
                </span>
                <span
                    className={`cursor-pointer ${activeTab === 'Activities' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('Activities')}
                >
                    Activities
                </span>
                <span
                    className={`cursor-pointer ${activeTab === 'Resources' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('Resources')}
                >
                    Resources
                </span>
            </nav>
            <div className="bg-white p-4 shadow-lg rounded-lg">
                {renderContent()}
            </div>

        </div>
    );
};

export default ManagePage;
