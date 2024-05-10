import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChalkboardTeacher,
  faCheckCircle,
  faTasks,
  faArrowUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import WorldMap from "../assets/dotted-world-map4757.jpg";

const Dashboard = () => {
    const [activeLink, setActiveLink] = useState(null);
  const chartRef = useRef(null);
  let doughnutChart = null;
  let barChart = null;

  const [volunteersCount, setVolunteersCount] = useState(0);
  const [trainersCount, setTrainersCount] = useState(0);
  const [trainingCount, setTrainingCount] = useState(0);
  const [activitiesCount, setActivitiesCount] = useState(0);

  const animateCount = (targetCount, setCountFunc) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setCountFunc(count);
      if (count === targetCount) clearInterval(interval);
    }, 10);
  };

  useEffect(() => {
    animateCount(500, setVolunteersCount);
    animateCount(50, setTrainersCount);
    animateCount(300, setTrainingCount);
    animateCount(1000, setActivitiesCount);

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Check if a chart instance already exists
      if (doughnutChart) {
        doughnutChart.destroy(); // Destroy the existing chart
      }
      // Generate random percentages
      const randomPercentages = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * 100)
      );

      // Create a new chart instance for main doughnut chart
      doughnutChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "Dataset",
              data: randomPercentages,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
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
            doughnutLabel: {
              labels: [
                {
                  text: "Red",
                  color: "rgb(255, 99, 132)",
                },
                {
                  text: "Blue",
                  color: "rgb(54, 162, 235)",
                },
                {
                  text: "Yellow",
                  color: "rgb(255, 205, 86)",
                },
              ],
              font: {
                size: "20",
              },
            },
          },
          layout: {
            padding: {
              left: 30,
              right: 10,
              top: 50,
              bottom: 50,
            },
          },
        },
      });

      // Create doughnut chart for Sub Block 1
      const subBlock1Ctx = document
        .getElementById("subBlock1Chart")
        .getContext("2d");
      const subBlock1Chart = new Chart(subBlock1Ctx, {
        type: "doughnut",
        data: {
          labels: ["Label 1", "Label 2"],
          datasets: [
            {
              label: "Dataset",
              data: [30, 70], // Example data, adjust as needed
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
            doughnutLabel: {
              labels: [
                {
                  text: "Red",
                  color: "rgb(255, 99, 132)",
                },
                {
                  text: "Blue",
                  color: "rgb(54, 162, 235)",
                },
                {
                  text: "Yellow",
                  color: "rgb(255, 205, 86)",
                },
              ],
            },
          },
        },
      });

      // Create doughnut chart for Sub Block 2
      const subBlock2Ctx = document
        .getElementById("subBlock2Chart")
        .getContext("2d");
      const subBlock2Chart = new Chart(subBlock2Ctx, {
        type: "doughnut",
        data: {
          labels: ["Label 3", "Label 4"],
          datasets: [
            {
              label: "Dataset",
              data: [40, 60],
              backgroundColor: ["rgb(255, 205, 86)", "rgb(75, 192, 192)"],
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
            doughnutLabel: {
              labels: [
                {
                  text: "Red",
                  color: "rgb(255, 99, 132)",
                },
                {
                  text: "Blue",
                  color: "rgb(54, 162, 235)",
                },
                {
                  text: "Yellow",
                  color: "rgb(255, 205, 86)",
                },
              ],
            },
          },
        },
      });

      const Block10Ctx = document
        .getElementById("Block10Chart")
        .getContext("2d");
      const Block10Chart = new Chart(Block10Ctx, {
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
      const Block11Ctx = document
        .getElementById("Block11Chart")
        .getContext("2d");
      const Block11Chart = new Chart(Block11Ctx, {
        type: "doughnut",
        data: {
          labels: ["No. activites being done", "No. of activites done"],
          datasets: [
            {
              label: "",
              data: [60, 40],
              backgroundColor: ["rgb(255, 205, 86)", "rgb(75, 192, 192)"],
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

      const data = {
        labels: ["Videos", "Text Articles", "Interactive Quizzes", "PDFs"],
        datasets: [
          {
            label: "",
            data: [25, 40, 20, 15], // Example data, adjust as needed
            backgroundColor: [
              "rgba(255, 99, 132 )",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86 )",
              "rgba(75, 192, 192 )",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      // Create the bar chart
      const BarCtx = document
        .getElementById("BarChart")
        .getContext("2d");
      const barChart = new Chart(BarCtx, {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            scales: {
                y:{
                    display:false
                },
                x:{
                    display:false
                }
            },
            plugins: {
                legend: {
                  display: false,
                },
              },
        },
      });

      // Cleanup function
      return () => {
        doughnutChart.destroy();
        subBlock1Chart.destroy();
        subBlock2Chart.destroy();
        Block10Chart.destroy();
        Block11Chart.destroy();
        barChart.destroy();
      };
    }
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
          <FontAwesomeIcon
            icon={faChalkboardTeacher}
            className="text-2xl mt-2"
          />
        </div>

        {/* Block 3: Completed Mandatory Training */}
        <div className="bg-yellow-200 p-4 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold mb-2">
            Completed Mandatory Training
          </h2>
          {/* Display number of completed mandatory training */}
          <p className="text-xl font-bold">{trainingCount}</p>
          {/* Font Awesome icon */}
          <FontAwesomeIcon icon={faCheckCircle} className="text-2xl mt-2" />
        </div>

        {/* Block 4: Total no. of activities */}
        <div className="bg-pink-200 p-4 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold mb-2">
            Total no. of activities
          </h2>
          <p className="text-xl font-bold">{activitiesCount}</p>

          <FontAwesomeIcon icon={faTasks} className="text-2xl mt-2" />
        </div>
      </div>

      {/* Second Row: World Map and Languages */}
      <div className="flex mt-8 h-full">
        {/* Block 5: World Map */}
        <div
          className="bg-purple-200 p-8 rounded-lg flex flex-col justify-center items-center"
          style={{ width: "75%", height: "60vh" }}
        >
          <h2 className="text-lg font-semibold mb-4"></h2>
          {/* Insert world map component here */}
          <div className="w-full h-full bg-gray-500">
            <img
              src={WorldMap}
              alt=""
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* Block 6: Languages */}
        <div
          className="bg-orange-200 p-8 rounded-lg flex flex-col ml-4"
          style={{ width: "25%", height: "250px" }}
        >
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
        <div
          className="bg-yellow-200 p-4 rounded-lg flex flex-col justify-center items-center"
          style={{ height: "400px", position: "relative" }}
        >
          <h2 className="text-lg font-semibold mb-10">Engagement</h2>
          <div
            className="canvas-container ml-44"
            style={{ width: "60%", height: "80%" }}
          >
            <canvas
              ref={chartRef}
              style={{ width: "100%", height: "100%" }}
            ></canvas>
          </div>

          <div
            className="canvas-info"
            style={{
              width: "50%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <div className="mt-36 ml-9">
              <h2 className="text-xl font-[500]">341</h2>
              <p className="text-sm mt-2">Registeration</p>
            </div>
            <div className="mt-8 ml-9">
              <h2 className="text-xl font-[500]">250</h2>
              <p className="text-sm mt-2">Induction</p>
            </div>
            <div className="mt-5 ml-9">
              <h2 className="text-xl font-[500]">150</h2>
              <p className="text-sm mt-2">Volunteers</p>
            </div>
          </div>
        </div>

        {/* Block 8 */}
        <div
          className="bg-green-200 p-4 rounded-lg flex flex-col justify-center items-center" // Add relative positioning
          style={{ height: "400px", position: "relative" }}
        >
          <div className="w-full h-1/2 absolute top-0 right-0">
            {" "}
            {/* Position to top right */}
            <h1 className="text-md font-semibold ml-4 mt-4 ">
              Active Volunteers
              {/* <p className=" text-4xl ml-8 w-0">
              60
            </p> */}
            </h1>
            
            <div className="ml-52 mb-7" style={{ width: "40%", height: "70%" }}>
              <canvas
                id="subBlock1Chart"
                style={{ width: "100%", height: "80%" }}
              ></canvas>
            </div>
          </div>
          {/* Div for Sub Block 2 */}
          <div
            className="w-full h-1/2 absolute bottom-0 left-0"
            style={{ width: "50%" }}
          >
            {" "}
            <h3 className="text-md font-semibold mb-2 ml-4">Active Trainers</h3>
            <div className="ml-52" style={{ width: "80%", height: "70%" }}>
              <canvas
                id="subBlock2Chart"
                style={{ width: "100%", height: "80%" }}
              ></canvas>
            </div>
          </div>
        </div>

        {/* Block 9 */}
        <div
          className="bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center"
          style={{ height: "400px" }}
        >
          <h2 className="text-lg font-semibold mb-2">Block 9</h2>
          <p className="text-xl font-bold">Content 9</p>
        </div>
      </div>

      {/* Fourth Row: Next Three Blocks */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Block 10 */}
        <div
          className="bg-gray-100 rounded-lg flex flex-col items-center"
          style={{ height: "400px" }}
        >
          <Link to="/activites">
          <h2 className="text-xl font-bold text-center mt-8">Activites
          <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xl relative ml-7"
              style={{ transform: "rotate(-45deg)" }}
            />
          </h2>
          </Link>
          <div className="rounded-lg flex justify-between h-full w-full ml-2">
          <div
            className="w-1/2 left-0" style={{widht:"50%", height:"90%"}}>
            <canvas
              id="Block10Chart"
              style={{ width: "70%" }}
            ></canvas>
          </div>
          <div className="w-1/2 right-0">
          <div className=" mt-28 ml-6 w-44 ">
              <span className="inline-block h-3 w-3 rounded-full bg-red-700 "></span>
               <p>No. of Activites not done</p>
              <span className="inline-block h-3 w-3 rounded-full bg-blue-700 "></span>
               <p>No. of Activites done</p>
              
            </div>
          </div>
          </div>
        </div>

        {/* Block 11 */}
        <div
          className="bg-gray-100 rounded-lg flex flex-col items-center"
          style={{ height: "400px" }}
        >
          <Link to="/courses">
          <h2 className="text-xl font-bold text-center mt-8">LMS Courses 
          <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xl relative ml-7"
              style={{ transform: "rotate(-45deg)" }}
            />
          </h2>
          </Link>
          <div className="rounded-lg flex justify-between h-full w-full ml-2">
          <div
            className="w-1/2 left-0" style={{widht:"50%", height:"90%"}}>
            <canvas
              id="Block11Chart"
              style={{ width: "70%" }}
            ></canvas>
          </div>
          <div className="w-1/2 right-0">
          <div className=" mt-28 ml-6 w-44 ">
              <span className="inline-block h-3 w-3 rounded-full bg-green-300 "></span>
               <p>No. of Courses not done</p>
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-400 "></span>
               <p>No. of Courses done</p>
              
            </div>
          </div>
          </div>
        </div>

        {/* Block 12 */}
        <div
          className="bg-gray-200 p-4 rounded-lg flex flex-col justify-center items-center"
          style={{ height: "400px" }}
        >
         <Link to="/resourses">
            <h2 className="text-xl font-bold mb-3">Resouses
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xl relative ml-6"
              style={{ transform: "rotate(-45deg)" }}
            />
            </h2>
          </Link> 
          <div className="mt-6" style={{width: "90%", height: "70%"}}>
            <canvas id="BarChart" style={{ width: "80%", height:"80%" }}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
