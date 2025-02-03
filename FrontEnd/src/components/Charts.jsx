import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

{
  // import React from "react";
  // import { Pie } from "react-chartjs-2";
  // import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
  // // Register the ArcElement, Tooltip, and Legend
  // ChartJS.register(ArcElement, Tooltip, Legend);
  // const PieCharts = () => {
  //   const data1 = {
  //     labels: [
  //       "Analysis",
  //       "Backdoor",
  //       "DoS",
  //       "Exploits",
  //       "Fuzzers",
  //       "Generic",
  //       "Normal",
  //       "Reconnaissance",
  //       "Shellcode",
  //       "Worms",
  //     ],
  //     datasets: [
  //       {
  //         label: "Frequency 1",
  //         data: [2000, 1746, 12264, 33393, 18184, 40000, 56000, 10491, 1133, 130],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.6)", // Red
  //           "rgba(54, 162, 235, 0.6)", // Blue
  //           "rgba(255, 206, 86, 0.6)", // Yellow
  //           "rgba(75, 192, 192, 0.6)", // Teal
  //           "rgba(153, 102, 255, 0.6)", // Purple
  //           "rgba(255, 159, 64, 0.6)", // Orange
  //           "rgba(255, 99, 71, 0.6)", // Tomato Red
  //           "rgba(0, 255, 0, 0.6)", // Lime Green
  //           "rgba(30, 144, 255, 0.6)", // Dodger Blue
  //           "rgba(255, 105, 180, 0.6)", //Hot Pink
  //         ],
  //         borderWidth: 0.5,
  //       },
  //     ],
  //   };
  //   const data2 = {
  //     labels: [
  //       "Analysis",
  //       "Backdoor",
  //       "DoS",
  //       "Exploits",
  //       "Fuzzers",
  //       "Generic",
  //       "Normal",
  //       "Reconnaissance",
  //       "Shellcode",
  //       "Worms",
  //     ],
  //     datasets: [
  //       {
  //         label: "Frequency",
  //         data: [677, 583, 4089, 11132, 6062, 18871, 37000, 3496, 378, 44],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.6)", // Red
  //           "rgba(54, 162, 235, 0.6)", // Blue
  //           "rgba(255, 206, 86, 0.6)", // Yellow
  //           "rgba(75, 192, 192, 0.6)", // Teal
  //           "rgba(153, 102, 255, 0.6)", // Purple
  //           "rgba(255, 159, 64, 0.6)", // Orange
  //           "rgba(255, 99, 71, 0.6)", // Tomato Red
  //           "rgba(0, 255, 0, 0.6)", // Lime Green
  //           "rgba(30, 144, 255, 0.6)", // Dodger Blue
  //           "rgba(255, 105, 180, 0.6)", //Hot Pink
  //         ],
  //         borderWidth: 0.5,
  //       },
  //     ],
  //   };
  //   const options = {
  //     responsive: false,
  //     plugins: {
  //       legend: {
  //         display: false, // Disable legends for individual charts
  //       },
  //       title: {
  //         display: true,
  //         text: "Frequency Distribution Pie Charts",
  //       },
  //     },
  //   };
  //   const combinedLabels = [...data1.labels];
  //   const combinedColors = [...data1.datasets[0].backgroundColor];
  //   return (
  //     <>
  //       <h1 className="text-2xl font-semibold">Dataset Visualisation</h1>
  //       <div
  //         style={{
  //           display: "flex",
  //           flexDirection: "row",
  //           alignItems: "center",
  //         }}
  //       >
  //         <div
  //           style={{
  //             display: "flex",
  //             flexDirection: "column",
  //             marginTop: "20px",
  //           }}
  //         >
  //           {combinedLabels.map((label, index) => (
  //             <div key={index} style={{ display: "flex", alignItems: "center" }}>
  //               <div
  //                 style={{
  //                   width: 15,
  //                   height: 15,
  //                   backgroundColor: combinedColors[index],
  //                   border: "1px solid black",
  //                   marginRight: 5,
  //                 }}
  //               />
  //               <span>{label}</span>
  //             </div>
  //           ))}
  //         </div>
  //         <div
  //           style={{
  //             display: "flex",
  //             justifyContent: "space-around",
  //             width: "60%",
  //           }}
  //         >
  //           <div
  //             style={{
  //               width: "450px",
  //               height: "450px",
  //               display: "flex",
  //               flexDirection: "column",
  //               alignItems: "center",
  //               justifyContent: "center",
  //             }}
  //           >
  //             <h1 className="p-4 font-semibold">Training Dataset</h1>
  //             <Pie data={data1} options={options} width={350} height={350} />
  //           </div>
  //           <div
  //             style={{
  //               width: "450px",
  //               height: "450px",
  //               display: "flex",
  //               flexDirection: "column",
  //               alignItems: "center",
  //               justifyContent: "center",
  //             }}
  //           >
  //             <h1 className="p-4 font-semibold">Testing Dataset</h1>
  //             <Pie data={data2} options={options} width={350} height={350} />
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };
  // export default PieCharts;
}

// Register the necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarGraph = () => {
  const labels = [
    "Analysis",
    "Backdoor",
    "DoS",
    "Exploits",
    "Fuzzers",
    "Generic",
    "Normal",
    "Reconnaissance",
    "Shellcode",
    "Worms",
  ];

  const data1 = {
    labels: labels,
    datasets: [
      {
        label: "Training Dataset",
        data: [2000, 1746, 12264, 33393, 18184, 40000, 56000, 10491, 1133, 130],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
          "rgba(255, 99, 71, 0.6)", // Tomato Red
          "rgba(0, 255, 0, 0.6)", // Lime Green
          "rgba(30, 144, 255, 0.6)", // Dodger Blue
          "rgba(255, 105, 180, 0.6)", // Hot Pink
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "Testing Dataset",
        data: [677, 583, 4089, 11132, 6062, 18871, 37000, 3496, 378, 44],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
          "rgba(255, 99, 71, 0.6)", // Tomato Red
          "rgba(0, 255, 0, 0.6)", // Lime Green
          "rgba(30, 144, 255, 0.6)", // Dodger Blue
          "rgba(255, 105, 180, 0.6)", // Hot Pink
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Disable aspect ratio
    plugins: {
      legend: {
        display: false, // Show legends for the datasets
      },
      title: {
        display: true,
        text: "Frequency Distribution Bar Graphs",
      },
    },
  };

  return (
    <>
      <h1 className="text-2xl font-semibold">Dataset Visualisation</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          height: "400px",
        }}
      >
        <div style={{ width: "450px" }}>
          <h1 className="p-4 font-semibold">Training Dataset</h1>
          <Bar data={data1} options={options} /> {/* Set height here */}
        </div>
        <div style={{ width: "450px" }}>
          <h1 className="p-4 font-semibold">Testing Dataset</h1>
          <Bar data={data2} options={options} /> {/* Set height here */}
        </div>
      </div>
    </>
  );
};

export default BarGraph;
