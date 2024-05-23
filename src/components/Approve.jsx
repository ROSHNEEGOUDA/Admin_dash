import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";


const Approve = () => {
    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const [activeIndex, setActiveIndex] = useState(() => {
        // Check localStorage for the active index value
        const storedIndex = localStorage.getItem('activeTabIndex');
        return storedIndex ? parseInt(storedIndex) : 0; // Default to 0 if no value is found
    });
    const isMobile = useMediaQuery({ maxWidth: 670 });

    useEffect(() => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[activeIndex] = true;
            return newState;
        });
    }, [activeIndex]);

    useEffect(() => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[activeIndex] = true;
            return newState;
        });
    }, [activeIndex]);

    const CountingAnimation = ({ value }) => {
        const [count, setCount] = useState(0);
    
        useEffect(() => {
            let animation = null;
            if (count < value) {
                animation = setTimeout(() => {
                    setCount(prevCount => prevCount + 1);
                }, 25); // Adjust the duration of animation
            }
            return () => {
                clearTimeout(animation);
            };
        }, [count, value]);
    
        return <span>{count}</span>;
    };

    const toggleNavbar = (index) => {
        setIsOpen(prevState => {
            const newState = prevState.map((state, i) => index === i ? !state : false);
            setActiveIndex(index === activeIndex ? null : index);
            return newState;
        });
    };

    const contentMap = {
        0: (
            <div className="content bg-slate-100">
                <hr className="my-2 mt-5" />
                <Link to="/content01">
                    <div className={`bg-purple-300 p-4 mx-6 rounded-2xl shadow-xl ${isMobile ? "h-60" : "h-36"}`}>
                        Activity 1
                        <div className=" h-14 flex flex-wrap justify-between">
                            <div className="grid grid-cols-3 gap-12 mt-5 ml-7">
                                <div className=" col-span-1 text-center">
                                    <h1 className="text-2xl font-[600]"><CountingAnimation value={100}/></h1>
                                    <p>In-Progress</p>
                                </div>
                                <div className=" col-span-1 text-center">
                                    <h1 className="text-2xl font-[600]"><CountingAnimation value={10}/></h1>
                                    <p>Completed</p>
                                </div>
                                <div className=" col-span-1 text-center">
                                    <h1 className="text-2xl font-[600]"><CountingAnimation value={7}/></h1>
                                    <p>Screening</p>
                                </div>
                            </div>
                            <div className={`grid grid-cols-2 gap-11 mt-5 mr-6 ml-5 ${isMobile ? "ml-8" : ""}`}>
                                <div className=" col-span-1 text-center">
                                    <h1 className="text-2xl font-[600]"><CountingAnimation value={300}/></h1>
                                    <p>Total User</p>
                                </div>
                                <div className=" col-span-1 text-center">
                                    <h1 className="text-2xl font-[600]"><CountingAnimation value={50}/></h1>
                                    <p>Pending</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </Link>
                <div className={` bg-slate-300 p-4 mx-6 mt-4 mb-4 rounded-2xl shadow-xl ${isMobile ? "h-60" : "h-36"}`}>
                    Activity 2
                    <div className=" h-14 flex flex-wrap justify-between">
                        <div className="grid grid-cols-3 gap-12 mt-5 ml-7">
                            <div className=" col-span-1 text-center">
                                <h1 className="text-2xl font-[600]"><CountingAnimation value={100}/></h1>
                                <p>In-Progress</p>
                            </div>
                            <div className=" col-span-1 text-center">
                                <h1 className="text-2xl font-[600]"><CountingAnimation value={10}/></h1>
                                <p>Completed</p>
                            </div>
                            <div className=" col-span-1 text-center">
                                <h1 className="text-2xl font-[600]"><CountingAnimation value={7}/></h1>
                                <p>Screening</p>
                            </div>
                        </div>
                        <div className={`grid grid-cols-2 gap-11 mt-5 mr-6 ml-5 ${isMobile ? "ml-8" : ""}`}>
                            <div className=" col-span-1 text-center">
                                <h1 className="text-2xl font-[600]"><CountingAnimation value={300}/></h1>
                                <p>Total User</p>
                            </div>
                            <div className=" col-span-1 text-center">
                                <h1 className="text-2xl font-[600]"><CountingAnimation value={50}/></h1>
                                <p>Pending</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`bg-green-300 p-4 mx-6 mt-4 mb-4 rounded-2xl shadow-xl ${isMobile ? "h-60" : "h-36"}`}>
                    Activity 3
                    <div className=" h-14 flex flex-wrap justify-between">
                        <div className="grid grid-cols-3 gap-12 mt-5 ml-7">
                            <div className=" col-span-1 text-center">
                                <h1 className="text-2xl font-[600]"><CountingAnimation value={100}/></h1>
                                <p>In-Progress</p>
                            </div>
                            <div className=" col-span-1 text-center">
                                <h1 className="text-2xl font-[600]"><CountingAnimation value={10}/></h1>
                                <p>Completed</p>
                            </div>
                            <div className=" col-span-1 text-center">
                                <h1 className="text-2xl font-[600]"><CountingAnimation value={7}/></h1>
                                <p>Screening</p>
                            </div>
                        </div>
                        <div className={`grid grid-cols-2 gap-11 mt-5 mr-6 ml-5 ${isMobile ? "ml-8" : ""}`}>
                            <div className=" col-span-1 text-center">
                                <h1 className="text-2xl font-[600]"><CountingAnimation value={300}/></h1>
                                <p>Total User</p>
                            </div>
                            <div className=" col-span-1 text-center">
                                <h1 className="text-2xl font-[600]"><CountingAnimation value={50}/></h1>
                                <p>Pending</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        1: (
            <div className="content">
                <hr className="my-2 mt-5" />
                <div className=" bg-gray-300 p-4 h-36 mx-6 rounded-2xl">Content for Vertical 2</div>
            </div>
        ),
        2: (
            <div className="content">
                <hr className="my-2 mt-5" />
                <div className=" bg-gray-300 p-4 h-36 mx-6 rounded-2xl">Content for Vertical 3</div>
            </div>
        ),
        3: (
            <div className="content">
                <hr className="my-2 mt-5" />
                <div className=" bg-gray-300 p-4 h-36 mx-6 rounded-2xl">Content for Vertical 4</div>
            </div>
        )
    };

    return (
        <div className="mx-auto mt-8">
            <h1 className="ml-7 text-2xl font-semibold">Summary</h1>
            <h1 className="ml-7 mt-5">Dashboard/Approve</h1>
            <div className="bg-blue-300 mx-4 h-28 my-10 rounded-3xl grid grid-cols-4 gap-4 shadow-xl">
                <div className="col-span-1 text-center mt-7">
                    <h1 className="text-2xl font-[600]"><CountingAnimation value={1000}/></h1>
                    <h3>Total activities</h3>
                </div>
                <div className="col-span-1 text-center mt-7">
                    <h1 className="text-2xl font-[600]"><CountingAnimation value={7}/></h1>
                    <h3>Pending Approvals</h3>
                </div>
                <div className="col-span-1 text-center mt-7">
                    <h1 className="text-2xl font-[600]"><CountingAnimation value={30}/></h1>
                    <h3>Rejected</h3>
                </div>
                <div className="col-span-1 text-center mt-7">
                    <h1 className="text-2xl font-[600]"><CountingAnimation value={90}/></h1>
                    <h3>Approve</h3>
                </div>
            </div>

            <div className="mt-20">
            <nav>
                    <ul className="flex flex-row gap-7 ml-6">
                        <li>
                            <button onClick={() => toggleNavbar(0)} className={`py-2 ${activeIndex === 0 && 'border-b-2 border-blue-500'}`}>
                                Policies and Advocacy
                            </button>
                        </li>
                        <li>
                            <button onClick={() => toggleNavbar(1)} className={`py-2 ${activeIndex === 1 && 'border-b-2 border-blue-500'}`}>
                                Vertical 2
                            </button>
                        </li>
                        <li>
                            <button onClick={() => toggleNavbar(2)} className={`py-2 ${activeIndex === 2 && 'border-b-2 border-blue-500'}`}>
                                Vertical 3
                            </button>
                        </li>
                        <li>
                            <button onClick={() => toggleNavbar(3)} className={`py-2 ${activeIndex === 3 && 'border-b-2 border-blue-500'}`}>
                                Vertical 4
                            </button>
                        </li>
                    </ul>
                </nav>

                {activeIndex !== null && contentMap[activeIndex]}
            </div>
        </div>
    );
};

export default Approve;
