import React, { useState } from "react";
import { Link } from "react-router-dom";

const PlanA = () => {
    const [activePlan, setActivePlan] = useState("Plan A");

    const handlePlanChange = (plan) => {
        setActivePlan(plan);
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold font-serif mt-10 sm:mt-16">Induction</h1>
            <nav className="flex flex-wrap justify-between items-center mt-4">
                <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
                    <button
                        className={`px-4 py-2 rounded-md ${activePlan === "Plan A" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
                            }`}
                        onClick={() => handlePlanChange("Plan A")}
                    >
                        Plan A
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${activePlan === "Plan B" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
                            }`}
                        onClick={() => handlePlanChange("Plan B")}
                    >
                        Plan B
                    </button>
                </div>
                {activePlan === "Plan B" && (
                    <button className="px-4 py-2 mt-4 sm:mt-0 bg-blue-500 text-white rounded-md">
                        Add New Question
                    </button>
                )}
            </nav>
            <div className="mt-6">
                {activePlan === "Plan A" && (
                    <div className="flex flex-col w-full lg:w-4/5">
                        <Link to="#">
                            <div className="w-full h-11 bg-slate-300 flex items-center rounded-xl shadow-md mb-7">
                                <h1 className="ml-4 sm:ml-6">Chapter 1</h1>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="w-full h-11 bg-slate-300 flex items-center rounded-xl shadow-md mb-7">
                                <h1 className="ml-4 sm:ml-6">Chapter 2</h1>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="w-full h-11 bg-slate-300 flex items-center rounded-xl shadow-md mb-7">
                                <h1 className="ml-4 sm:ml-6">Chapter 3</h1>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="w-full h-11 bg-slate-300 flex items-center rounded-xl shadow-md mb-7">
                                <h1 className="ml-4 sm:ml-6">Chapter 4</h1>
                            </div>
                        </Link>
                        <div className="mt-auto self-end">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Publish</button>
                        </div>
                    </div>
                )}
                {activePlan === "Plan B" && (
                    <div className="flex flex-col w-full lg:w-4/5">
                        <div className="w-full h-24 bg-slate-300 flex justify-between items-center rounded-xl shadow-md mb-7 px-4 sm:px-6">
                            <div className="flex flex-col">
                                <h1 className="text-left">Question</h1>
                                <h1 className="text-left">Answer</h1>
                            </div>
                            <button className="px-4 py-2 bg-green-400 text-black rounded-md">Edit</button>
                        </div>
                        <div className="w-full h-24 bg-slate-300 flex justify-between items-center rounded-xl shadow-md mb-7 px-4 sm:px-6">
                            <div className="flex flex-col">
                                <h1 className="text-left">Question</h1>
                                <h1 className="text-left">Answer</h1>
                            </div>
                            <button className="px-4 py-2 bg-green-400 text-black rounded-md">Edit</button>
                        </div>
                        <div className="w-full h-24 bg-slate-300 flex justify-between items-center rounded-xl shadow-md mb-7 px-4 sm:px-6">
                            <div className="flex flex-col">
                                <h1 className="text-left">Question</h1>
                                <h1 className="text-left">Answer</h1>
                            </div>
                            <button className="px-4 py-2 bg-green-400 text-black rounded-md">Edit</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlanA;
