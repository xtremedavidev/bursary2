import React, { useState, useEffect, useRef  } from 'react';

function Table({ data, page, onPageChange }) {
  const [csvData, setCsvData] = useState(''); // State to store CSV data

  // Calculate the total number of students fetched
  const totalStudents = data.length;

  // Calculate the total amount paid
  const totalAmountPaid = data.reduce((total, student) => total + student.PayAmount, 0);

  // Function to convert data to CSV format and trigger download
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

  // Function to handle scrolling and load more data
  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      // User has scrolled to the end, load more data
      onPageChange(page + 1);
      console.log*
    }
  };
  

  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.1, // Trigger when 10% of the container is visible
  });
  




  const tableRef = useRef();

  useEffect(() => {
    if (tableRef.current) {
      observer.observe(tableRef.current);
    }
  
    return () => {
      if (tableRef.current) {
        observer.unobserve(tableRef.current);
      }
    };
  }, [tableRef, page, onPageChange]);

  


  return (
    <div className="w-screen">
      <div className="text-center text-sm md:ml-64 text-gray-900 my-8">
        <p className="md:text-lg font-semibold">
          Total Number of Students Fetched: {totalStudents}
        </p>
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

      <div id=""  ref={tableRef} className="md:ml-64 overflow-auto">
        <table className="table-container mx-auto overflow-auto bg-white border border-gray-200">
         
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
