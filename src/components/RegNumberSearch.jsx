import React, { useState } from "react";

function RegNumberSearch({ regNumber, setRegNumber1 }) {
  return (
    <div className="flex-1 m-2">
      <input
        type="text"
        placeholder="Enter Registration Number"
        value={regNumber}
        onChange={(e) => setRegNumber1(e.target.value)}
        className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-400"
      />
    </div>
  );
}

export default RegNumberSearch;
