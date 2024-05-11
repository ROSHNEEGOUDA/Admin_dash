import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Chart from "chart.js/auto";

const Resouses = () => {
  useEffect(() => {
    const Block1Ctx = document.getElementById("Block1Chart").getContext("2d");
    const Block1Chart = new Chart(Block1Ctx, {
      type: "doughnut",
      data: {
        labels: ["Ebooks", "Blogs", "Video", "Whitepaper"],
        datasets: [
          {
            label: "",
            data: [20, 35, 25, 20],
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
        labels: ["Active", "Not Active"],
        datasets: [
          {
            label: "",
            data: [60, 40],
            backgroundColor: ["#008000", "#90EE90"],
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
      <h1>Dashboard/Resourses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {/* First Block */}
        <div className="bg-gray-100 rounded-lg flex flex-col items-center" style={{ height: "400px" }}>
  <h2 className="text-xl font-bold text-center mt-6">Resources</h2>
  <div className="rounded-lg grid grid-cols-2 justify-between h-full w-full ml-2">
    <div className="w-full h-full flex justify-center items-center">
      <canvas id="Block1Chart" style={{ maxWidth: "70%", maxHeight: "90%" }}></canvas>
    </div>
    <div className="flex flex-col justify-center items-start">
      <div className="mt-4 ml-9">
        <h2 className="text-xl font-[500]">341</h2>
        <p className="text-sm mt-2">Registration</p>
      </div>
      <div className="mt-4 ml-9">
        <h2 className="text-xl font-[500]">250</h2>
        <p className="text-sm mt-2">Induction</p>
      </div>
      <div className="mt-4 ml-9">
        <h2 className="text-xl font-[500]">150</h2>
        <p className="text-sm mt-2">Volunteers</p>
      </div>
      <div className="mt-4 ml-9">
        <h2 className="text-xl font-[500]">150</h2>
        <p className="text-sm mt-2">Volunteers</p>
      </div>
    </div>
  </div>
</div>


        {/* Second Block */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-10 text-center">
            Resolved Report
          </h2>
          <div className="mt-6" style={{ width: "90%", height: "70%" }}>
            <canvas
              id="Block2Chart"
              style={{ width: "80%", height: "80%" }}
            ></canvas>
          </div>
        </div>

        {/* Third Block */}
        <div className="bg-gray-200 p-4 rounded-lg" style={{ height: "250px" }}>
          <h1 className="text-xl font-semibold">Top Acesses Resourese</h1>
          <div className="rounded-lg flex justify-between h-full">
            <div className="left-0 w-1/2">
              <div className="mt-10">
                <h2 className="">Blogs</h2>
                <h2 className="mt-4">Videos</h2>
                <h2 className="mt-4">Ebooks</h2>
              </div>
            </div>
            <div className="right-0 w-1/2">
              <div className="mt-10">
                <h2 className=" text-right mr-12">1000</h2>
                <h2 className="mt-4 text-right mr-12">950</h2>
                <h2 className="mt-4 text-right mr-12">860</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resouses;
