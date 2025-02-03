// Dashboard.jsx
import React, { useState } from "react";
import PieCharts from "../components/Charts";
import Attack_Details from "../components/Attack_Details";
import Hero from "../components/Hero";
import Features from "../components/Features";

const Dashboard = () => {
  const attackData = [
    {
      title: "Analysis",
      details: "Analysis of network traffic to identify vulnerabilities.",
    },
    {
      title: "Backdoor",
      details:
        "A method of bypassing normal authentication to access a system.",
    },
    {
      title: "DoS",
      details:
        "Denial of Service (DoS) attacks disrupt services by overwhelming them with traffic.",
    },
    {
      title: "Exploits",
      details:
        "Code or techniques that take advantage of software vulnerabilities.",
    },
    {
      title: "Fuzzers",
      details:
        "Tools that send random data to applications to find vulnerabilities.",
    },
    {
      title: "Generic",
      details:
        "Non-specific attacks that do not fall into distinct categories.",
    },
    {
      title: "Normal",
      details: "No attack detected; standard network activity.",
    },
    {
      title: "Reconnaissance",
      details: "The phase where attackers gather information about a target.",
    },
    {
      title: "Shellcode",
      details:
        "A small piece of code used as the payload in the exploitation of a software vulnerability.",
    },
    {
      title: "Worms",
      details:
        "Self-replicating malware that spreads without human intervention.",
    },
  ];

  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-5">
      <Hero />
      <Features />
      <div className="charts pb-16">
        <PieCharts />
      </div>

      <h1 className="text-2xl font-semibold mb-4">Network Attacks</h1>
      <div className="flex flex-wrap gap-2">
        {attackData.map((attack, index) => (
          <div className="w-52 flex-shrink-0" key={index}>
            <Attack_Details
              title={attack.title}
              details={attack.details}
              isOpen={openCardIndex === index}
              onClick={() => handleCardClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
