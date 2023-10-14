import React, { useState } from 'react';

// Helper function to generate random values for each part
const getRandomValue = () => Math.floor(Math.random() * 100000);

const initialFacultyFinancialData = [
  {
    faculty: "Administration",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Agriculture",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Arts",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Education",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Environmental Design and Management",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Basic Medical",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Law",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Pharmacy",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Science",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Social Sciences",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Technology",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Clinical Sciences",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
  {
    faculty: "Dentistry",
    part1: getRandomValue(),
    part2: getRandomValue(),
    part3: getRandomValue(),
    part4: getRandomValue(),
    part5: getRandomValue(),
    part6: getRandomValue(),
    total: getRandomValue(),
  },
];

const ReportsPage = () => {
  const [facultyFinancialData, setFacultyFinancialData] = useState(initialFacultyFinancialData);

  return (
    <div className="p-4">
    <h2 className="text-2xl font-semibold mb-4">Financial Reports</h2>
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full border">
        <thead>
          <tr>
            <th className="px-4 py-2">Faculty</th>
            <th className="px-4 py-2">Part 1</th>
            <th className="px-4 py-2">Part 2</th>
            <th className="px-4 py-2">Part 3</th>
            <th className="px-4 py-2">Part 4</th>
            <th className="px-4 py-2">Part 5</th>
            <th className="px-4 py-2">Part 6</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {facultyFinancialData.map((data) => (
            <tr key={data.faculty}>
              <td className="border px-4 py-2">{data.faculty}</td>
              <td className="border px-4 py-2">{data.part1}</td>
              <td className="border px-4 py-2">{data.part2}</td>
              <td className="border px-4 py-2">{data.part3}</td>
              <td className="border px-4 py-2">{data.part4}</td>
              <td className="border px-4 py-2">{data.part5}</td>
              <td className="border px-4 py-2">{data.part6}</td>
              <td className="border px-4 py-2">{data.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default ReportsPage;