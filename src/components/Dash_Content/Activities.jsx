import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Chart from "chart.js/auto";

const Activities = () => {
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

    return () => {
      Block1Chart.destroy();
      barChart.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto mt-8">
        <h1>
            Dashboard/Activites
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {/* First Block */}
        <div
          className="bg-gray-100 rounded-lg flex flex-col items-center"
          style={{ height: "400px" }}
        >
          <h2 className="text-xl font-bold text-center mt-8">Activites</h2>
          <div className="rounded-lg flex justify-between h-full w-full ml-2">
          <div className="rounded-lg grid grid-cols-2 justify-between h-full w-full ml-2">
            <div className="w-full h-full flex justify-center items-center">
              <canvas
                id="Block1Chart"
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
        </div>

        {/* Second Block */}
        <div className="bg-gray-200 p-4 rounded-lg flex flex-col justify-center items-center" style={{ height: "400px" }}>
        <h2 className="text-xl font-bold mb-10 text-center">
              Catagories
            </h2>
          <div className="grid grid-cols-1 justify-center items-center mt-6" style={{ width: "90%", height: "70%" }}>
            <canvas
              id="BarChart"
              style={{ width: "80%", height: "80%" }}
            ></canvas>
          </div>
        </div>

        {/* Third Block */}
        <div className="bg-gray-200 p-4 rounded-lg flex flex-col justify-between items-between">
          <h1 className="text-xl font-semibold">Top 5 Activites</h1>
          <div className="rounded-lg flex justify-between h-full">
              <div className="left-0 w-1/2">
                  <div className="mt-10">
                  <h2 className="">
                    Write a blog
                  </h2>
                  <h2 className="mt-4">
                    Workshop for others
                  </h2>
                  <h2 className="mt-4">
                    Cyber safety norms
                  </h2>
                  <h2 className="mt-4">
                    Presentation on CPF
                  </h2>
                  <h2 className="mt-4">
                    Creating Games
                  </h2>
                  </div>
              </div>
              <div className="right-0 w-1/2">
                <div className="mt-10">
                <h2 className=" text-right mr-12">
                    1000
                  </h2>
                  <h2 className="mt-4 text-right mr-12">
                    950
                  </h2>
                  <h2 className="mt-4 text-right mr-12">
                    860
                  </h2>
                  <h2 className="mt-4 text-right mr-12">
                    710
                  </h2>
                  <h2 className="mt-4 text-right mr-12">
                    500
                  </h2>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
