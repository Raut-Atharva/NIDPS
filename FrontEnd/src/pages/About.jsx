import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        About NetworkScout
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl">
        NetworkScout is a state-of-the-art Network Intrusion Detection and
        Prevention System (NIDPS) designed to protect your network from
        unauthorized access and potential threats. With a robust architecture,
        it offers real-time monitoring, intelligent threat detection, and
        automated responses to ensure your network remains secure.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl">
        Our mission is to provide reliable and innovative security solutions
        that empower organizations to safeguard their data and systems against
        evolving cyber threats. We strive to continuously enhance our
        capabilities to meet the dynamic needs of our users.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Why Choose NetworkScout?
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 max-w-2xl">
        <li>
          🔍 <strong>Comprehensive Monitoring:</strong> Gain insights into your
          network traffic with real-time alerts and logs.
        </li>
        <li>
          🛡️ <strong>Intelligent Detection:</strong> Utilize advanced algorithms
          to identify and mitigate threats proactively.
        </li>
        <li>
          ⚙️ <strong>User-Friendly Interface:</strong> Easy-to-navigate
          dashboard for managing security settings and monitoring events.
        </li>
        <li>
          📈 <strong>Customizable Solutions:</strong> Tailor the system to fit
          your organization's unique security needs.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Join Us</h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Become part of the NetworkScout community and take the first step
        towards a more secure network. Together, we can create a safer digital
        environment for everyone.
      </p>
    </div>
  );
};

export default About;
