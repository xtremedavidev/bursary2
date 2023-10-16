import React, { useState } from 'react';

function Table({ data }) {
  const [csvData, setCsvData] = useState(''); // State to store CSV data

  // Calculate the total number of students fetched
  const totalStudents = data.length;

  // Calculate the total amount paid
  const totalAmountPaid = data.reduce((total, student) => total + student.PayAmount, 0);

  // Function to convert data to CSV format
  const convertToCsv = () => {
    // Create a CSV string from the data
    const csv = [
      'S/N,Reg Number,Name,Pay Amount,Description,Dept,Faculty,Part', // CSV header
      ...data.map((item, index) => `${index + 1},${item.RegNo},${item.Names},${item.PayAmount},${item.PayDescription},${item.DeptName},${item.facultyId},${item.Part}`),
    ].join('\n');
    
    setCsvData(csv); // Store the CSV data in the state
  };

  return (
    <div className='w-screen'>
      <div className="text-center text-sm md:ml-64  text-gray-900 my-8">
        <p className="md:text-lg font-semibold">
          Total Number of Students Fetched: {totalStudents}
        </p>
        <p className="md:text-lg font-semibold">
          Total Amount Paid: {totalAmountPaid}
        </p>
        <button
          onClick={convertToCsv}
          className="p-4 m-6 bg-blue-400 text-color-white rounded-lg"
        >
          Convert to CSV
        </button>
        {csvData && (
          <a
            href={`data:text/csv;charset=utf-8,${encodeURI(csvData)}`}
            download="student_data.csv"
            className="p-4 m-6 bg-blue-400 text-color-white rounded-lg"
          >
            Download CSV
          </a>
        )}
      </div>

      <div className='md:ml-64 overflow-auto'>

   
    
      <table className="mx-auto overflow-auto bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              S/N
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Reg Number
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Name
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Pay Amount
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Description
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Dept
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Faculty
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Part
            </th>
          </tr>
        </thead>
        <tbody className="text-black">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{item.RegNo}</td>
                <td className="py-3 px-4">{item.Names}</td>
                <td className="py-3 px-4">{item.PayAmount}</td>
                <td className="py-3 px-4">{item.PayDescription}</td>
                <td className="py-3 px-4">{item.DeptName}</td>
                <td className="py-3 px-4">{item.facultyId}</td>
                <td className="py-3 px-4">{item.Part}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No data available</td>
              {/* Add other columns to match your table structure */}
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Table;
