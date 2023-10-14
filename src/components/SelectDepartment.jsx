// SelectDepartment.js
import React from 'react';

const SelectDepartment = ({ faculties, departments, selectedFaculty, onFacultyChange, selectedDepartment, onDepartmentChange }) => {
  const facultyDepartments = selectedFaculty ? departments[selectedFaculty] : [];

  return (
    <div className="flex-1 m-2">
     
      <div className="flex-1 mx-10">
        <div>
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">
            Select Department
          </label>
          <select
            id="department"
            name="department"
            value={selectedDepartment}
            onChange={onDepartmentChange}
            className="mt-1 w-full bg-slate-100 p-2 border-gray-200 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="">Select Department</option>
            {facultyDepartments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectDepartment;
