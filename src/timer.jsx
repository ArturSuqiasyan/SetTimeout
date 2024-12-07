import React, { useState, useEffect } from "react";
const Timer = ({ initialMinutes, initialSeconds, onDelete }) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(true);
  
    useEffect(() => {
      let interval = null;
  
      if (isRunning) {
        interval = setInterval(() => {
          setSeconds((prev) => {
            if (prev === 0) {
              setMinutes((m) => (m > 0 ? m - 1 : 59));
              return 59;
            } else {
              return prev - 1;
            }
          });
        }, 1000);
      } else if (!isRunning && interval !== null) {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [isRunning]);
  
    return (
      <div className="p-4 border rounded-lg shadow-md bg-white text-center w-64">
        <div className="text-3xl font-bold mb-4">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setIsRunning(false)}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              !isRunning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isRunning}
          >
            Pause
          </button>
          <button
            onClick={() => setIsRunning(true)}
            className={`px-4 py-2 bg-green-500 text-white rounded ${
              isRunning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isRunning}
          >
            Continue
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default Timer;