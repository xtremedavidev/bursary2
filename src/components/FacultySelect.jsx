import React from 'react';

const FacultySelect = ({ faculties, onSelect }) => {
  return (
    <div className="flex-1 m-2">
      <div>
        <label htmlFor="faculty" className="block text-sm font-medium text-black">
          Select Faculty
        </label>
        <select
          id="faculty"
          name="faculty"
          onChange={(e) => onSelect(e.target.value)}
          className="mt-1 w-full bg-slate-100 p-2 border-gray-200 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select Faculty</option>
          {faculties.map((faculty) => (
            <option key={faculty} value={faculty}>
              {faculty}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FacultySelect;
