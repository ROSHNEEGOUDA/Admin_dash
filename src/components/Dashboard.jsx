import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChalkboardTeacher,
  faCheckCircle,
  faTasks,
  faArrowUp,
  faArrowRight,
  faAngleDown,
  faArrowDown,
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
      const BarCtx = document.getElementById("BarChart").getContext("2d");
      const barChart = new Chart(BarCtx, {
        type: "bar",
        data: data,
        options: {
          responsive: true,
          scales: {
            y: {
              display: false,
            },
            x: {
              display: false,
            },
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

  // Raw data 
  const countryData = [
    { name: 'India', users: 85, change: 10 },
    { name: 'USA', users: 75, change: -5 },
    { name: 'Canada', users: 50, change: 15 },
    { name: 'Spain', users: 65, change: -10 },
    { name: 'Australia', users: 40, change: 5 },
    { name: 'Germany', users: 90, change: 20 },
  ];

  const lineChartData = {
    labels: countryData.map(country => country.name),
    datasets: [
      {
        label: 'Users',
        data: countryData.map(country => country.users),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container mx-auto mt-20 w-fit">
      <div className="flex justify-between items-center ">
        {/* Left content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg">
          {/* Block 1: Total no of volunteers */}
          <div className="bg-blue-200 w-60 h-28 rounded-lg flex flex-col justify-center items-center shadow-xl">
            <h2 className="text-lg font-semibold mb-2">
              Total no of volunteers
            </h2>
            <p className="text-xl font-bold">{volunteersCount}</p>
          </div>

          {/* Block 2: No.of Trainers */}
          <div className="bg-green-200 w-60 h-28 rounded-lg flex flex-col justify-center items-center shadow-xl">
            <h2 className="text-lg font-semibold mb-2">No.of Trainers</h2>
            <p className="text-xl font-bold">{trainersCount}</p>
          </div>

          {/* Block 3: Completed Mandatory Training */}
          <div className="bg-yellow-200 w-60 h-28 rounded-lg flex flex-col justify-center items-center shadow-xl">
            <h2 className="text-lg font-semibold mb-2 ml-4">
              Completed Mandatory Training
            </h2>
            <p className="text-xl font-bold">{trainingCount}</p>
          </div>

          {/* Block 4: Total no. of activities */}
          <div className="bg-pink-200 w-60 h-28 rounded-lg flex flex-col justify-center items-center shadow-xl">
            <h2 className="text-lg font-semibold mb-2">
              Total no. of activities
            </h2>
            <p className="text-xl font-bold">{activitiesCount}</p>
          </div>
        </div>

        {/* Right content */}
        <Link>
          <div className="bg-gray-100 p-4 rounded-md absolute top-24 right-6 w-40">
            <h2 className="text-lg font-semibold">Last Month</h2>
            <FontAwesomeIcon icon={faAngleDown} className="absolute top-1/2 transform -translate-y-1/2 left-32 text-gray-600" />
          </div>
        </Link>
      </div>

      {/* Second Row: World Map and Languages */}
      <div className="flex flex-col md:flex-row mt-8 h-full">
        {/* Block 5: World Map */}
        <div
  className="bg-slate-100 p-8 rounded-lg flex flex-col lg:flex-row justify-center items-center border border-black shadow-xl"
  style={{ width: "100%", height: "60vh" }}
>
  {/* Left div for the world map */}
  <div className="w-full lg:w-full h-1/2 lg:h-full bg-gray-500 mb-4 lg:mb-0">
    <img
      src={WorldMap}
      alt="World Map"
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
    />
  </div>

  {/* Right div for the information box */}
  <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center items-center">
    <div className="bg-white border border-black rounded-lg shadow-lg p-4 flex flex-col w-full overflow-y-auto">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2">
        <span className="text-lg font-semibold">Country</span>
        <span className="text-lg font-semibold">Users</span>
      </div>
      {countryData.map((country) => (
        <div key={country.name} className="flex justify-between items-center border-b last:border-b-0 border-gray-300 py-2">
          <span className="text-lg">{country.name}</span>
          <span className="text-lg flex items-center">
            {country.users}
            <span className={`flex items-center ml-2 ${country.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {country.change}%
              {country.change >= 0 ? (
                <FontAwesomeIcon icon={faArrowUp} className="ml-1" />
              ) : (
                <FontAwesomeIcon icon={faArrowDown} className="ml-1" />
              )}
            </span>
          </span>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* Block 6: Languages */}
        <div className="bg-orange-200 p-6 rounded-lg flex flex-col ml-4 mt-5 lg:mt-0 lg:w-1/4 border border-black shadow-xl">
          <div className="flex justify-between w-full">
            <h2 className="text-xl font-semibold text-center ml-3">Language</h2>
            <Link to="/courses">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xl relative mr-5 h-6"
                style={{ transform: "rotate(-45deg)" }}
              />
            </Link>
          </div>

          {/* Insert languages component here */}
          <div className="flex justify-between w-full my-7">
            <ul className="font-[500] text-ls flex flex-col gap-5">
              <li>English</li>
              <li>Hindi</li>
              <li>Spanish</li>
              {/* Add more languages as needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Third Row: Additional Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {/* Block 7 */}
        <div
          className="bg-yellow-200 p-3 rounded-lg relative flex flex-col border border-black shadow-xl"
          style={{ height: "400px" }}
        >
          <div className="flex justify-between w-full mt-5">
            <h2 className="text-2xl font-semibold mb-10 ml-4">Engagement</h2>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xl relative mr-5 h-6"
              style={{ transform: "rotate(-45deg)" }}
            />
          </div>

          <div className="w-full h-1 bg-white"></div>

          <div className="w-full h-full grid grid-cols-2 ml-2 rounded-lg">
            <div className="flex flex-col justify-center items-start">
              <div className="mt-6 ml-4">
                <h2 className="text-xl font-[500]">341</h2>
                <p className="text-sm mt-2">Registration</p>
              </div>
              <div className="mt-8 ml-4">
                <h2 className="text-xl font-[500]">250</h2>
                <p className="text-sm mt-2">Induction</p>
              </div>
              <div className="mt-8 ml-4">
                <h2 className="text-xl font-[500]">150</h2>
              </div>
            </div>
            <div className="w-full h-full flex justify-start items-start mr-5 lg:w-60 ">
              <canvas
                ref={chartRef}
                style={{ maxWidth: "80%", maxHeight: "95%" }}
              ></canvas>
            </div>
          </div>
        </div>

        {/* Block 8 */}
        <div
          className="bg-green-200 p-4 rounded-lg relative border border-black shadow-xl"
          style={{ height: "400px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-1/2 absolute top-0 left-0">
            <div className="bg-green-200 flex flex-col justify-center items-center">
              <h1 className="text-md font-semibold ml-4 mt-4">
                Active Volunteers
              </h1>
              <div className="mt-4" style={{ width: "60%", height: "70%" }}>
                <canvas
                  id="subBlock1Chart"
                  style={{ width: "100%", height: "100%" }}
                ></canvas>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 h-1/2 absolute bottom-0 ">
            <div className="bg-green-200 flex flex-col justify-center items-center">
              <h3 className="text-md font-semibold mb-2 ml-4">
                Active Trainers
              </h3>
              <div
                className="mt-4 right-0"
                style={{ width: "60%", height: "70%" }}
              >
                <canvas
                  id="subBlock2Chart"
                  style={{ width: "100%", height: "100%" }}
                ></canvas>
              </div>
            </div>
          </div>
        </div>

        {/* Block 9 */}
        <div
          className="bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center border border-black shadow-xl"
          style={{ height: "400px" }}
        >
          <h2 className="text-lg font-semibold mb-2">Block 9</h2>
          <p className="text-xl font-bold">Content 9</p>
        </div>
      </div>

      {/* Fourth Row: Next Three Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6">
        {/* Block 10 */}
        <div
          className="bg-gray-200 p-3 rounded-lg flex flex-col items-center border border-black shadow-xl"
          style={{ height: "400px" }}
        >
          <div className="flex justify-between w-full mt-8">
            <h2 className="text-3xl font-semibold text-center ml-8">Activities</h2>
            <Link to="/activites">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xl relative mr-5 h-6"
                style={{ transform: "rotate(-45deg)" }}
              />
            </Link>
          </div>

          <div className="w-full bg-white h-1 mt-4"></div>

          <div className="rounded-lg grid grid-cols-2 justify-between h-full w-full ml-2">
            <div className="w-full h-full flex justify-center items-center">
              <canvas
                id="Block10Chart"
                style={{ maxWidth: "70%", maxHeight: "90%" }}
              ></canvas>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="mt-4 flex justify-end items-center">
                <span className="grid grid-cols-1 h-3 w-3 rounded-full bg-red-700 "></span>
                <p className="text-xs text-center ml-2">
                  No. of Activities not done
                </p>
              </div>
              <div className="mt-4 flex justify-end items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-blue-700 "></span>
                <p className="text-xs text-center ml-2">
                  No. of Activities done
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 11 */}
        <div
          className="bg-gray-200 p-3 rounded-lg flex flex-col items-center border border-black shadow-xl"
          style={{ height: "400px" }}
        >
          <div className="flex justify-between w-full mt-8">
            <h2 className="text-3xl font-semibold text-center ml-8">LMS Course</h2>
            <Link to="/courses">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xl relative mr-5 h-6"
                style={{ transform: "rotate(-45deg)" }}
              />
            </Link>
          </div>

          <div className="w-full bg-white h-1 mt-4"></div>
          <div className="rounded-lg grid grid-cols-2 justify-between h-full w-full ml-2">
            <div className="w-full h-full flex justify-center items-center">
              <canvas
                id="Block11Chart"
                style={{ maxWidth: "70%", maxHeight: "90%" }}
              ></canvas>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="mt-4 flex justify-end items-center">
                <span className="grid grid-cols-1 h-3 w-3 rounded-full bg-red-700 "></span>
                <p className="text-xs text-center ml-2">
                  No. of Courses not done
                </p>
              </div>
              <div className="mt-4 flex justify-end items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-blue-700 "></span>
                <p className="text-xs text-center ml-2">No. of Courses done</p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 12 */}
        <div
          className="bg-gray-200 p-3 rounded-lg flex flex-col items-center border border-black shadow-xl"
          style={{ height: "400px" }}
        >
          <div className="flex justify-between w-full mt-8">
            <h2 className="text-3xl font-semibold text-center ml-8">Resourses</h2>
            <Link to="/resourses">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xl relative mr-5 h-6"
                style={{ transform: "rotate(-45deg)" }}
              />
            </Link>
          </div>

          <div className="w-full bg-white h-1 mt-4"></div>
          <div
            className="grid grid-cols-1 justify-center items-center mt-6"
            style={{ width: "90%", height: "70%" }}
          >
            <canvas
              id="BarChart"
              style={{ width: "80%", height: "80%" }}
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
