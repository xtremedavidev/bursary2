import React, { useState, useEffect } from 'react';

function SessionSelect({onsessionChange, selectedSession}) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fetch sessions from your API
    fetch('https://bursarybackend.onrender.com/filters')
      .then((response) => response.json())
      .then((data) => {
        setSessions(data.data);
      })
      .catch((error) => {
        console.error('Error fetching sessions:', error);
      });
  }, []);

  return (
    <div className="flex-1 m-2">
    <label htmlFor="Session" className="block text-sm font-medium">
      Select Session
    </label>
    <select
      id="Session"
      name="Session"
      value={selectedSession}
      onChange={(e) => onsessionChange(e.target.value)}
      className="mt-1 border-gray-400 block w-full p-3 pr-10 py-2 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      <option value=""></option>
      {/* Add your Session options here */}
      <option value="2023">2023</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
    </select>
  </div>
  );
}

export default SessionSelect;
