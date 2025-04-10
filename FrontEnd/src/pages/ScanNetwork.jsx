{
  // import { useState, useEffect } from "react";
  // import ScanBtn from "../components/ScanBtn";
  // import PacketList from "../components/PacketList";
  // import { ToastContainer, toast } from "react-toastify";
  // import "react-toastify/dist/ReactToastify.css";
  // function App() {
  //   const [btnState, setBtnState] = useState("idle");
  //   const [packetsDone, setPacketsDone] = useState(false);
  //   const handleBtnClick = () => {
  //     setBtnState("scanning");
  //   };
  //   useEffect(() => {
  //     if (packetsDone) {
  //       // Randomly decide whether the scan ends in "safe" or "error"
  //       const endState = Math.random() > 0.5 ? "safe" : "error";
  //       setBtnState(endState);
  //       // Show toast notification based on the end state
  //       if (endState === "safe") {
  //         toast.success("Scan Complete: Safe!");
  //       } else {
  //         toast.error("Scan Complete: Error detected!");
  //       }
  //       // After 5 seconds, revert the button to "idle"
  //       const timeout = setTimeout(() => {
  //         setBtnState("idle");
  //         setPacketsDone(false); // Reset packetsDone for the next scan
  //       }, 6000);
  //       return () => clearTimeout(timeout); // Clean up the timeout when the component unmounts
  //     }
  //   }, [packetsDone]);
  //   return (
  //     <div className="flex justify-center min-h-screen p-20">
  //       <div className="flex flex-col items-center">
  //         <ScanBtn state={btnState} onClick={handleBtnClick} />
  //         <p className="text-2xl font-semibold">Scanned Packets:</p>
  //         <PacketList state={btnState} isDone={setPacketsDone} />
  //         <ToastContainer />
  //       </div>
  //     </div>
  //   );
  // }
  // export default App;
}
{
  // import React, { useState, useEffect } from "react";
  // import io from "socket.io-client";
  // import { ToastContainer, toast } from "react-toastify";
  // import "react-toastify/dist/ReactToastify.css";
  // // Reusing existing socket connection
  // const socket = io("http://127.0.0.1:5000");
  // const formatPacketData = (packet) => {
  //   const data = packet.data;
  //   return `Protocol: ${data.proto} (${data.service})|
  // Source: ${data.sbytes} bytes | Window: ${data.swin} | Load: ${data.sload} bps
  // Destination: ${data.dbytes} bytes | Window: ${data.dwin} | Load: ${
  //     data.dload
  //   } bps
  // Packets: ${data.spkts} (source) / ${
  //     data.dpkts
  //   } (dest) | Rate: ${data.rate.toFixed(2)} pkts/sec
  //  Same IPs/Ports: ${data.is_sm_ips_ports ? "Yes" : "No"}`;
  // };
  // const App = () => {
  //   const [packets, setPackets] = useState([]);
  //   const [capturing, setCapturing] = useState(false);
  //   useEffect(() => {
  //     socket.on("new_packet", (data) => {
  //       setPackets((prevPackets) => [...prevPackets, data]);
  //     });
  //     return () => {
  //       socket.off("new_packet");
  //     };
  //   }, []);
  //   useEffect(() => {
  //     const packetDiv = document.getElementById("packet-list");
  //     if (packetDiv) {
  //       packetDiv.scrollTop = packetDiv.scrollHeight;
  //     }
  //   }, [packets]);
  //   const toggleCapture = async () => {
  //     if (capturing) {
  //       await fetch("http://127.0.0.1:5000/stop");
  //       setCapturing(false);
  //     } else {
  //       await fetch("http://127.0.0.1:5000/start");
  //       setCapturing(true);
  //     }
  //   };
  //   return (
  //     <div className="flex justify-center items-center w-screen p-5">
  //       <div className="flex flex-col items-center">
  //         <button onClick={toggleCapture} className="scnbtn">
  //           {capturing ? "Stop Capture" : "Start Capture"}
  //         </button>
  //         <div
  //           id="packet-list"
  //           className="border border-gray-300 w-[1000px] h-[500px] overflow-y-auto m-5 p-4 rounded-lg shadow-md bg-gray-50"
  //         >
  //           <div className="space-y-4">
  //             {packets.map((packet, index) => (
  //               <div
  //                 key={index}
  //                 className="bg-white p-4 rounded-md shadow border border-gray-200"
  //               >
  //                 <div className="font-mono text-sm whitespace-pre-line">
  //                   {formatPacketData(packet)}
  //                 </div>
  //                 <div className="text-xs text-gray-500 mt-2">
  //                   Packet #{packets.length - index}
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  // export default App;
}
{
  //  import React, { useState, useEffect } from "react";
  // import io from "socket.io-client";
  // import { ToastContainer, toast } from "react-toastify";
  // import "react-toastify/dist/ReactToastify.css";
  // const socket = io("http://127.0.0.1:5000");
  // const formatPacketData = (packet) => {
  //   const data = packet.data;
  //   return `Protocol: ${data.proto} (${data.service}) |
  // Source: ${data.sbytes} bytes | Window: ${data.swin} | Load: ${data.sload} bps
  // Destination: ${data.dbytes} bytes | Window: ${data.dwin} | Load: ${
  //     data.dload
  //   } bps
  // Packets: ${data.spkts} (source) / ${
  //     data.dpkts
  //   } (dest) | Rate: ${data.rate.toFixed(2)} pkts/sec
  // Same IPs/Ports: ${data.is_sm_ips_ports ? "Yes" : "No"}`;
  // };
  // const App = () => {
  //   const [packets, setPackets] = useState([]);
  //   const [status, setStatus] = useState("idle"); // idle | scanning | prevent
  //   const [capturing, setCapturing] = useState(false);
  //   useEffect(() => {
  //     socket.on("new_packet", (data) => {
  //       setPackets((prevPackets) => [...prevPackets, data]);
  //     });
  //     socket.on("anomaly_detected", () => {
  //       setStatus("prevent");
  //       toast.error("🚨 Anomaly Detected! Click 'Prevent' to block all traffic.");
  //     });
  //     socket.on("safe", () => {
  //       setStatus("scanning");
  //       toast.success("✅ Network is safe. Continuing scan.");
  //     });
  //     return () => {
  //       socket.off("new_packet");
  //       socket.off("anomaly_detected");
  //       socket.off("safe");
  //     };
  //   }, []);
  //   useEffect(() => {
  //     const packetDiv = document.getElementById("packet-list");
  //     if (packetDiv) {
  //       packetDiv.scrollTop = packetDiv.scrollHeight;
  //     }
  //   }, [packets]);
  //   const toggleCapture = async () => {
  //     if (status === "prevent") {
  //       socket.emit("block");
  //       toast.error("🔴 Blocking all traffic!");
  //       return;
  //     }
  //     if (capturing) {
  //       await fetch("http://127.0.0.1:5000/stop");
  //       setCapturing(false);
  //       setStatus("idle");
  //     } else {
  //       await fetch("http://127.0.0.1:5000/start");
  //       setCapturing(true);
  //       setStatus("scanning");
  //     }
  //   };
  //   return (
  //     <div className="flex justify-center items-center w-screen p-5">
  //       <div className="flex flex-col items-center">
  //         <button onClick={toggleCapture} className="scnbtn">
  //           {status === "prevent"
  //             ? "Prevent"
  //             : capturing
  //             ? "Stop Capture"
  //             : "Start Capture"}
  //         </button>
  //         <div
  //           id="packet-list"
  //           className="border border-gray-300 w-[1000px] h-[500px] overflow-y-auto m-5 p-4 rounded-lg shadow-md bg-gray-50"
  //         >
  //           <div className="space-y-4">
  //             {packets.map((packet, index) => (
  //               <div
  //                 key={index}
  //                 className="bg-white p-4 rounded-md shadow border border-gray-200"
  //               >
  //                 <div className="font-mono text-sm whitespace-pre-line">
  //                   {formatPacketData(packet)}
  //                 </div>
  //                 <div className="text-xs text-gray-500 mt-2">
  //                   Packet #{packets.length - index}
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //         <ToastContainer />
  //       </div>
  //     </div>
  //   );
  // };
  // export default App;
}

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socket = io("http://127.0.0.1:5000");

const formatPacketData = (packet) => {
  const data = packet.data;
  return `Protocol: ${data.proto} (${data.service}) |
Source: ${data.sbytes} bytes | Window: ${data.swin} | Load: ${data.sload} bps
Destination: ${data.dbytes} bytes | Window: ${data.dwin} | Load: ${
    data.dload
  } bps
Packets: ${data.spkts} (source) / ${
    data.dpkts
  } (dest) | Rate: ${data.rate.toFixed(2)} pkts/sec
Same IPs/Ports: ${data.is_sm_ips_ports ? "Yes" : "No"}`;
};

const App = () => {
  const [packets, setPackets] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | scanning | prevent
  const [capturing, setCapturing] = useState(false);

  useEffect(() => {
    socket.on("new_packet", (data) => {
      setPackets((prevPackets) => [...prevPackets, data]);
    });

    socket.on("anomaly_detected", () => {
      setStatus("prevent");
      toast.error("🚨 Anomaly Detected! Click 'Prevent' to block all traffic.");
    });

    socket.on("safe", () => {
      setStatus("scanning");
      toast.success("✅ Network is safe. Continuing scan.");

      // Revert to idle (blue) after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setCapturing(false);
      }, 5000);
    });

    return () => {
      socket.off("new_packet");
      socket.off("anomaly_detected");
      socket.off("safe");
    };
  }, []);

  useEffect(() => {
    const packetDiv = document.getElementById("packet-list");
    if (packetDiv) {
      packetDiv.scrollTop = packetDiv.scrollHeight;
    }
  }, [packets]);

  const toggleCapture = async () => {
    if (status === "prevent") {
      socket.emit("block");
      toast.error("🔴 Blocking all traffic!");
      return;
    }

    if (capturing) {
      await fetch("http://127.0.0.1:5000/stop");
      setCapturing(false);
      setStatus("idle");
    } else {
      await fetch("http://127.0.0.1:5000/start");
      setCapturing(true);
      setStatus("scanning");
    }
  };

  const getButtonLabel = () => {
    if (status === "prevent") return "Prevent";
    if (capturing) return "Stop Capture";
    return "Start Capture";
  };

  const getButtonClass = () => {
    if (status === "prevent") return "bg-red-500 hover:bg-red-600";
    if (status === "scanning") return "bg-green-500 hover:bg-green-600";
    return "bg-blue-500 hover:bg-blue-600";
  };

  return (
    <div className="flex justify-center items-center w-screen p-5">
      <div className="flex flex-col items-center">
        <button
          onClick={toggleCapture}
          className={`scnbtn text-white px-6 py-2 rounded-lg shadow ${getButtonClass()}`}
        >
          {getButtonLabel()}
        </button>

        <div
          id="packet-list"
          className="border border-gray-300 w-[1000px] h-[500px] overflow-y-auto m-5 p-4 rounded-lg shadow-md bg-gray-50"
        >
          <div className="space-y-4">
            {packets.map((packet, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow border border-gray-200"
              >
                <div className="font-mono text-sm whitespace-pre-line">
                  {formatPacketData(packet)}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Packet #{packets.length - index}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
