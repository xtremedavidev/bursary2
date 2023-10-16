import React, { useState, useEffect } from 'react';

function SelectDescription({onDescriptionChange, selectedDescription}) {
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
      Select Description
    </label>
    <select
      id="Description"
      name="Description"
      value={selectedDescription}
      onChange={(e) => onDescriptionChange(e.target.value)}
      className="mt-1 p-2 border-gray-200 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      <option value="">Choose description</option>
      {/* Add your Session options here */}
      <option value="Acceptance Fee">Acceptance Fee</option>
      <option value="Convocation Fee">Convocation Fe</option>
      <option value="Stalite Fees(Two Semesters)">Stalite Fees(Two Semesters)</option>
      <option value="Stalite Fees(One Semesters)">Stalite Fees(One Semesters)</option>
      <option value="Accommodation(stalite)">Accommodation(stalite)</option>
      <option value="Tuition Fees(Stalite)">Tuition Fees(Stalite)</option>
      <option value="Late Registration">Late Registration</option>
      <option value="PG Accommodation(3-Bedded)">PG Accommodation(3-Bedded)</option>
      
    </select>
  </div>
  );
}

export default SelectDescription;





