import React from "react";

export default function Table({ data }) {

console.log("gotten", data)

  return (
    <table className=" w-full bg-white border border-gray-200">
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
  );
}
