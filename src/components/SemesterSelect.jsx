import React from 'react';

const SemesterSelect = ({ selectedSemester, onSemesterChange }) => {
  return (
    <div className='flex-1 mx-10'>
      <label htmlFor="semester" className="block text-sm font-medium ">
        Select Semester
      </label>
      <select
        id="semester"
        name="semester"
        value={selectedSemester}
        onChange={onSemesterChange}
        className="mt-1 w-full p-2 border-gray-200 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value=""></option>
        {/* Add your semester options here */}
        <option value="Semester 1">Harmattan</option>
        <option value="Semester 2">Rain</option>
      </select>
    </div>
  );
};

export default SemesterSelect;
