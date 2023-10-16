import React, { useEffect, useState } from 'react';

const SelectDepartment = ({ faculties, selectedFaculty, onDepartmentChange }) => {
  const [facultyDepartments, setFacultyDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    if (selectedFaculty) {
      // Fetch departments for the selected faculty
      fetch(`https://bursarybackend.onrender.com/filters?faculty=${selectedFaculty}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("API request failed");
          }
        })
        .then((data) => {
          setFacultyDepartments(data.data);
          console.log(data)
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Reset department selection and department list when no faculty is selected
      setFacultyDepartments([]);
      setSelectedDepartment('');
    }
  }, [selectedFaculty]);

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
    onDepartmentChange(department);
  };

  return (
    <div className="flex-1 m-2">
      <div className="">
        <div>
          <label htmlFor="department" className="block text-sm font-medium text-black">
            Select Department
          </label>
          <select
            id="department"
            name="department"
            value={selectedDepartment}
            onChange={(e) => handleDepartmentChange(e.target.value)}
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
