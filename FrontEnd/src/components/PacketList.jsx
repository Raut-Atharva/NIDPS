import React, { useEffect, useState } from "react";

const PacketList = ({ state, isDone }) => {
  const allPackets = [
    { src: "192.168.2.1", dest: "192.168.0.1", protocol: "HTTP" },
    { src: "192.168.2.2", dest: "192.168.0.2", protocol: "HTTPS" },
    { src: "192.168.2.3", dest: "192.168.0.3", protocol: "TCP" },
    { src: "192.168.2.4", dest: "192.168.0.4", protocol: "UDP" },
    { src: "192.168.2.1", dest: "192.168.0.1", protocol: "HTTP" },
    { src: "192.168.2.2", dest: "192.168.0.2", protocol: "HTTPS" },
    { src: "192.168.2.3", dest: "192.168.0.3", protocol: "TCP" },
    { src: "192.168.2.4", dest: "192.168.0.4", protocol: "UDP" },
    { src: "192.168.2.5", dest: "192.168.0.5", protocol: "FTP" },
    { src: "192.168.2.6", dest: "192.168.0.6", protocol: "SSH" },
    { src: "192.168.2.7", dest: "192.168.0.7", protocol: "DNS" },
    { src: "192.168.2.8", dest: "192.168.0.8", protocol: "HTTP" },
    { src: "192.168.2.9", dest: "192.168.0.9", protocol: "HTTPS" },
    { src: "192.168.2.10", dest: "192.168.0.10", protocol: "TCP" },
    { src: "192.168.2.11", dest: "192.168.0.11", protocol: "UDP" },
    { src: "192.168.2.12", dest: "192.168.0.12", protocol: "FTP" },
    { src: "192.168.2.13", dest: "192.168.0.13", protocol: "SSH" },
    { src: "192.168.2.14", dest: "192.168.0.14", protocol: "DNS" },
    { src: "192.168.2.15", dest: "192.168.0.15", protocol: "HTTP" },
    { src: "192.168.2.16", dest: "192.168.0.16", protocol: "HTTPS" },
    { src: "192.168.2.17", dest: "192.168.0.17", protocol: "TCP" },
    { src: "192.168.2.18", dest: "192.168.0.18", protocol: "UDP" },
    { src: "192.168.2.19", dest: "192.168.0.19", protocol: "FTP" },
    { src: "192.168.2.20", dest: "192.168.0.20", protocol: "SSH" },
    { src: "192.168.2.21", dest: "192.168.0.21", protocol: "DNS" },
    { src: "192.168.2.22", dest: "192.168.0.22", protocol: "HTTP" },
    { src: "192.168.2.23", dest: "192.168.0.23", protocol: "HTTPS" },
    { src: "192.168.2.24", dest: "192.168.0.24", protocol: "TCP" },
    { src: "192.168.2.25", dest: "192.168.0.25", protocol: "UDP" },
    { src: "192.168.2.26", dest: "192.168.0.26", protocol: "FTP" },
    { src: "192.168.2.27", dest: "192.168.0.27", protocol: "SSH" },
    { src: "192.168.2.28", dest: "192.168.0.28", protocol: "DNS" },
    { src: "192.168.2.29", dest: "192.168.0.29", protocol: "HTTP" },
    { src: "192.168.2.30", dest: "192.168.0.30", protocol: "HTTPS" },
    { src: "192.168.2.31", dest: "192.168.0.31", protocol: "TCP" },
    { src: "192.168.2.32", dest: "192.168.0.32", protocol: "UDP" },
    { src: "192.168.2.33", dest: "192.168.0.33", protocol: "FTP" },
    { src: "192.168.2.34", dest: "192.168.0.34", protocol: "SSH" },
    { src: "192.168.2.35", dest: "192.168.0.35", protocol: "DNS" },
    { src: "192.168.2.36", dest: "192.168.0.36", protocol: "HTTP" },
    { src: "192.168.2.37", dest: "192.168.0.37", protocol: "HTTPS" },
    { src: "192.168.2.38", dest: "192.168.0.38", protocol: "TCP" },
    { src: "192.168.2.39", dest: "192.168.0.39", protocol: "UDP" },
    { src: "192.168.2.40", dest: "192.168.0.40", protocol: "FTP" },
    { src: "192.168.2.41", dest: "192.168.0.41", protocol: "SSH" },
    { src: "192.168.2.42", dest: "192.168.0.42", protocol: "DNS" },
    { src: "192.168.2.43", dest: "192.168.0.43", protocol: "HTTP" },
    { src: "192.168.2.44", dest: "192.168.0.44", protocol: "HTTPS" },
    { src: "192.168.2.45", dest: "192.168.0.45", protocol: "TCP" },
    { src: "192.168.2.46", dest: "192.168.0.46", protocol: "UDP" },
    { src: "192.168.2.47", dest: "192.168.0.47", protocol: "FTP" },
    { src: "192.168.2.48", dest: "192.168.0.48", protocol: "SSH" },
    { src: "192.168.2.49", dest: "192.168.0.49", protocol: "DNS" },
    { src: "192.168.2.50", dest: "192.168.0.50", protocol: "HTTP" },
  ];

  const [packets, setPackets] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (state === "scanning") {
      const interval = setInterval(() => {
        if (counter < allPackets.length) {
          setPackets((prevPackets) => [...prevPackets, allPackets[counter]]);
          setCounter((prevCounter) => prevCounter + 1);
        } else {
          clearInterval(interval); // Stop adding packets when all are added
          isDone(true); // Trigger isDone when all packets are added
        }
      }, 100); // Add a packet every 1 second

      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, [state, counter]);

  return (
    <div className="min-h-80 max-h-80 overflow-y-auto m-5 border-2">
      <ul
        className={`flex flex-col gap-4 pkt_ls py-4 ${
          packets.length > 0 ? "pkt_ls" : ""
        }`}
      >
        {packets.length > 0 ? (
          <div>
            <li className="flex px-5 w-full font-bold text-xl">
              <span className="pkt">SOURCE</span>
              <span className="pkt">DESTINATION</span>
              <span className="pkt">PROTOCOL</span>
            </li>
            <hr />
            {packets.map((packet, index) => (
              <div>
                <li key={index} className="flex px-5 pb-4 w-full">
                  <span className="pkt"> {packet.src}</span>
                  <span className="pkt"> {packet.dest}</span>
                  <span className="pkt"> {packet.protocol}</span>
                </li>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-2xl w-full flex justify-center font-semibold">
            <p>Scan to Capture Packets . . . </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default PacketList;
