import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Chart from "chart.js/auto";

const Courses = () => {
  useEffect(() => {
    const Block1Ctx = document.getElementById("Block1Chart").getContext("2d");
    const Block1Chart = new Chart(Block1Ctx, {
      type: "doughnut",
      data: {
        labels: ["No. activites being done", "No. of activites not done"],
        datasets: [
          {
            label: "",
            data: [60, 40],
            //   backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
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
    const Block2Ctx = document.getElementById("Block2Chart").getContext("2d");
    const Block2Chart = new Chart(Block2Ctx, {
      type: "doughnut",
      data: {
        labels: ["Active Course", "In active courses"],
        datasets: [
          {
            label: "",
            data: [60, 40],
            //   backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
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
      Block2Chart.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1>Dashboard/Courses</h1>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {/* First Block */}
        <div
          className="bg-gray-100 rounded-lg flex flex-col items-center"
          style={{ height: "400px" }}
        >
          <h2 className="text-xl font-bold text-center mt-8">Courses</h2>
          <div className="rounded-lg flex justify-between h-full w-full ml-2">
          <div
            className="w-1/2 left-0" style={{widht:"50%", height:"90%"}}>
            <canvas
              id="Block1Chart"
              style={{ width: "70%" }}
            ></canvas>
          </div>
          <div className="w-1/2 right-0">
          <div className=" mt-28 ml-6 w-44 ">
              <span className="inline-block h-3 w-3 rounded-full bg-red-700 "></span>
               <p>No. of Courses not done</p>
              <span className="inline-block h-3 w-3 rounded-full bg-blue-700 "></span>
               <p>No. of Courses done</p>
              
            </div>
          </div>
          </div>
        </div>

        {/* Second Block */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-10 text-center">
            Trainer/Volunteers
          </h2>
          <div className="mt-6" style={{ width: "50%", height: "80%" }}>
            <canvas
              id="Block2Chart"
              style={{ width: "80%", height: "80%" }}
            ></canvas>
          </div>
        </div>

        {/* Third Block */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h1 className="text-xl font-semibold">Top 5 Courses</h1>
          <div className="rounded-lg flex justify-between h-full">
            <div className="left-0 w-1/2">
              <div className="mt-10">
                <h2 className="">Write a blog</h2>
                <h2 className="mt-4">Workshop for others</h2>
                <h2 className="mt-4">Cyber safety norms</h2>
                <h2 className="mt-4">Presentation on CPF</h2>
                <h2 className="mt-4">Creating Games</h2>
              </div>
            </div>
            <div className="right-0 w-1/2">
              <div className="mt-10">
                <h2 className=" text-right mr-12">1000</h2>
                <h2 className="mt-4 text-right mr-12">950</h2>
                <h2 className="mt-4 text-right mr-12">860</h2>
                <h2 className="mt-4 text-right mr-12">710</h2>
                <h2 className="mt-4 text-right mr-12">500</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
