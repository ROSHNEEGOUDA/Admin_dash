import React from "react";

const Session = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Create a new Session</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Part */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold">In-person</h2>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Title:</h3>
                        <p className="pl-4">Title Text</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Description:</h3>
                        <p className="pl-4">Description Text</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Trainer Name:</h3>
                        <p className="pl-4">Trainer Name Text</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Time:</h3>
                        <p className="pl-4">Time Text</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Venue:</h3>
                        <p className="pl-4">Venue Text</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Language:</h3>
                        <p className="pl-4">Language Text</p>
                    </div>
                </div>
                {/* Right Part */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold">Virtual</h2>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Title:</h3>
                        <p className="pl-4">Title Text</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Description:</h3>
                        <p className="pl-4">Description Text</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Trainer Name:</h3>
                        <p className="pl-4">Trainer Name Text</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Time:</h3>
                        <p className="pl-4">Time Text</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Language:</h3>
                        <p className="pl-4">Language Text</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Zoom Link:</h3>
                        <p className="pl-4">Zoom Link Text</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-8">Create</button>
            </div>
        </div>
    );
}

export default Session;
