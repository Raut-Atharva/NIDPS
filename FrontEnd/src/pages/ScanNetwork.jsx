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

  const TOAST_ID = "notification-toast";
  const TOAST_ID_2 = "predicition-toast";

  useEffect(() => {
    socket.on("new_packet", (data) => {
      setPackets((prevPackets) => [...prevPackets, data]);
    });

    socket.on("anomaly_detected", () => {
      setStatus("prevent");
      if (!toast.isActive(TOAST_ID)) {
        toast.error(
          "🚨 Anomaly Detected! Click 'Prevent' to block all traffic.",
          {
            toastId: TOAST_ID,
          }
        );
      }
    });

    socket.on("prediction", (prediction) => {
      if (!toast.isActive(TOAST_ID_2)) {
        toast.info(`🔍 Prediction: ${prediction.prediction}`, {
          toastId: TOAST_ID_2,
        });
      }
    });

    socket.on("Normal", () => {
      setStatus("scanning");
      if (!toast.isActive(TOAST_ID)) {
        toast.success("✅ Network is safe. Continuing scan.", {
          toastId: TOAST_ID,
        });
      }

      // Revert to idle (blue) after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setCapturing(false);
      }, 5000);
    });

    return () => {
      socket.off("new_packet");
      socket.off("anomaly_detected");
      socket.off("prediction");
      socket.off("Normal");
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

        <ToastContainer limit={1} />
      </div>
    </div>
  );
};

export default App;
