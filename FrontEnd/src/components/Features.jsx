import React from "react";

const Features = () => {
  const featuresList = [
    {
      title: "Real-Time Threat Detection",
      description:
        "Instantly identify potential intrusions and respond accordingly to mitigate risks.",
      icon: "🔍", // You can replace this with an SVG or image
    },
    {
      title: "Automated Responses",
      description:
        "Automatically mitigate threats with pre-defined security protocols to enhance response time.",
      icon: "⚙️",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Monitor your network’s health and security status at a glance with an intuitive interface.",
      icon: "📊",
    },
    {
      title: "Machine Learning Analytics",
      description:
        "Continuously learn from new threats to improve detection accuracy and reduce false positives.",
      icon: "📈",
    },
  ];

  return (
    <div className="py-16 " id="features">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Key Features of NetworkScout
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
