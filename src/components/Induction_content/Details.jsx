import React from 'react';

const Indetail = () => {
    return (
        <div className="p-6 relative min-h-screen">
            <h1 className="text-2xl font-bold mb-10 ml-20">Final Assignment Page</h1>
            <div className="flex space-x-16 ml-20 mb-10">
                <div className="flex flex-col items-start">
                    <h2 className="text-lg font-semibold">Name:</h2>
                    <p className="text-lg">John Doe</p>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-lg font-semibold">Approval:</h2>
                    <p className="text-lg">Awaiting</p>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-lg font-semibold">Submission Date:</h2>
                    <p className="text-lg">2024-05-19</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-20">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Answer Based on Scenario</h2>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Cumulative Score</h2>
                    <div className="flex flex-col mt-2">
                        <div className="flex items-center">
                            <h3 className="text-md font-semibold mr-2">Part A:</h3>
                            <p className="text-md">80%</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <h3 className="text-md font-semibold mr-2">Part B:</h3>
                            <p className="text-md">90%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 flex justify-between p-6">
                <div className="flex space-x-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Pass</button>
                    <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Retake</button>
                </div>
                <div className="flex">
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Make Them Trainer</button>
                </div>
            </div>
        </div>
    );
}

export default Indetail;
