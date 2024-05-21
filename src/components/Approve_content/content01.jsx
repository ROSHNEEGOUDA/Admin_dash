import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const ApproveContent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 20;

    // Example data for table rows
    const tableData = [
        { name: "Volunteer Name 1", type: "Volunteer", date: "2024-05-15", status: "Approved", language: "English" },
        { name: "Volunteer Name 2", type: "Trainer", date: "2024-05-15", status: "Approved", language: "Hindi" },
        // Add more rows as needed
    ];

    // Additional 197 random rows
    const getRandomLanguage = () => {
        const languages = ["English", "Hindi", "Spanish", "French", "German", "Chinese", "Japanese", "Arabic"];
        const randomIndex = Math.floor(Math.random() * languages.length);
        return languages[randomIndex];
    };

    for (let i = 3; i < 200; i++) {
        tableData.push({
            name: `Volunteer Name ${i}`,
            type: Math.random() < 0.5 ? "Volunteer" : "Trainer",
            date: "2024-05-15",
            status: Math.random() < 0.5 ? "Approved" : "Rejected",
            language: getRandomLanguage()
        });
    }

    const getTotalPages = () => {
        return Math.ceil(tableData.length / rowsPerPage);
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
                        className={`mr-2 px-3 py-1 rounded-md ${
                            currentPage === page ? "font-semibold bg-blue-500 text-white" : "bg-gray-300"
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
        const rows = tableData.slice(startIndex, endIndex);

        return rows.map((row, index) => (
            <tr key={index} className="bg-slate-100 mt-2 rounded-md">
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.type}</td>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.status}</td>
                <td className="px-4 py-2">{row.language}</td>
                <td className="px-4 py-2 w-32">
                    <Link to="/content">
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
                {/* <td className="px-4 py-2 w-32"></td> */}
            </tr>
        ));
    };

    return (
        <div className="mx-auto mt-8">
            <h1 className="mt-6 ml-6 text-xl font-[600] text-gray-400">Approve/content01</h1>
            <div className="bg-blue-500 mx-4 h-28 my-10 rounded-3xl grid grid-cols-4 gap-4 shadow-xl">
                <div className="col-span-1 text-center mt-7">
                    <h1 className="text-2xl font-[600]">100</h1>
                    <h3>Total activities</h3>
                </div>
                <div className="col-span-1 text-center mt-7">
                    <h1 className="text-2xl font-[600]">07</h1>
                    <h3>Pending Approvals</h3>
                </div>
                <div className="col-span-1 text-center mt-7">
                    <h1 className="text-2xl font-[600]">02</h1>
                    <h3>Rejected</h3>
                </div>
                <div className="col-span-1 text-center mt-7">
                    <h1 className="text-2xl font-[600]">07</h1>
                    <h3>Approved</h3>
                </div>
            </div>

            <div className="bg-gray-200 mx-4 h-12 my-10">
                <div className="w-32 flex justify-center items-center h-12">
                    <p>Pre-requisite</p>
                </div>
            </div>

            <div className="mt-20">
                <div className="flex mx-2 overflow-x-auto">
                    <div className="w-full">
                        <h2 className="text-lg font-semibold mb-4">Submission Table</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-green-400">
                                        <th className="px-4 py-2 text-left">Name</th>
                                        <th className="px-4 py-2 text-left">Type of User</th>
                                        <th className="px-4 py-2 text-left">Submission Date</th>
                                        <th className="px-4 py-2 text-left">Status</th>
                                        <th className="px-4 py-2 text-left">Language</th>
                                        <th className="px-4 py-2 w-32">Details</th>
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
            </div>
        </div>
    );
};

export default ApproveContent;
