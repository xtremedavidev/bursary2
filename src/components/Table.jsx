// Table.js
import React, { useState, useEffect, useRef } from 'react';

function Table({ data, page, onPageChange, onSortChange, selectedSort }) {
  const [csvData, setCsvData] = useState('');

  // Calculate the total number of students fetched
  const totalStudents = data.length;

  // Calculate the total amount paid
  const totalAmountPaid = data.reduce((total, student) => total + student.PayAmount, 0);

  const handleDownload = () => {
    // Create a CSV string from the data
    const csv = [
      'S/N,Reg Number,Name,Pay Amount,Description,Dept,Faculty,Part', // CSV header
      ...data.map((item, index) => `${index + 1},${item.RegNo},${item.Names},${item.PayAmount},${item.PayDescription},${item.DeptName},${item.facultyId},${item.Part}`),
    ].join('\n');

    // Create a Blob object with the CSV data and create a URL
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'student_data.csv';
    a.click();

    // Revoke the URL to free up resources
    window.URL.revokeObjectURL(url);
  };

  const handleSort = (sortItem) => {
    onSortChange(sortItem);
  };

  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;

    const handleScroll = () => {
      if (table) {
        const scrollTop = table.scrollTop;
        const containerHeight = table.clientHeight;
        const scrollHeight = table.scrollHeight;

        if (scrollTop + containerHeight >= scrollHeight * 0.9) {
          onPageChange(page + 1);
        }
      }
    };

    if (table) {
      table.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        table.removeEventListener('scroll', handleScroll);
      };
    }
  }, [page, onPageChange]);

  return (
    <div className="flex flex-col w-screen" id="table-container" ref={tableRef}>
      <div className="text-center text-sm md:ml-64 text-gray-900 my-8">
        <p className="md:text-lg font-semibold">
          Total Amount Paid: {totalAmountPaid}
        </p>
        <button
          onClick={handleDownload}
          className="p-4 m-6 bg-blue-400 text-color-white rounded-lg"
        >
          Download CSV
        </button>
      </div>

      <div className="flex justify-end">
        <select
          id="sort"
          name="sort"
          value={selectedSort}
          onChange={(e) => handleSort(e.target.value)}
          className="w-60 p-2 border-gray-200 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Sort by</option>
          {/* Add your sorting options here */}
        </select>
      </div>

      <div  className="md:ml-64 overflow-auto h-full">
        <table className="table-container mx-auto overflow-auto bg-white border border-gray-200" >

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
