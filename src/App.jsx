import React, { useState } from "react";
import Timer from "./Timer"


const App = () => {
  const [timers, setTimers] = useState([]);

  const createTimer = () => {
    const now = new Date();
    setTimers((prev) => [
      ...prev,
      {
        id: Date.now(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      },
    ]);
  };

  const deleteTimer = (id) => {
    setTimers((prev) => prev.filter((timer) => timer.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <button
        onClick={createTimer}
        className="mb-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Create 
      </button>
      <div className="space-y-4">
        {timers.map((timer) => (
          <Timer
            key={timer.id}
            initialMinutes={timer.minutes}
            initialSeconds={timer.seconds}
            onDelete={() => deleteTimer(timer.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;