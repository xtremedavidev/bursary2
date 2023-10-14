import { useEffect, useState } from 'react';

// Sample student data
const studentData = {
  name: 'OLADAPO Akinola Temitope',
  matricNumber: 'PHA/2009/111',
  faculty: 'Technology',
  part: '2',
  department: 'Civil Engineering',
};

// Sample transaction history data
const transactionHistory = [
  {
    regNumber: 'PHA/2009/111',
    name: 'OLADAPO Akinola Temitope',
    payAmount: '5000',
    description: 'Tuition Fee',
    department: 'Civil Engineering',
    faculty: 'Technology',
    date: '2023-10-15',
  },
  // Add more transaction records here
];

const StudentPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Student Information</h2>
      <div className="border border-gray-300 p-4 rounded-md mb-6">
        <p>
          <strong>Name:</strong> {studentData.name}
        </p>
        <p>
          <strong>Matric Number:</strong> {studentData.matricNumber}
        </p>
        <p>
          <strong>Faculty:</strong> {studentData.faculty}
        </p>
        <p>
          <strong>Part:</strong> {studentData.part}
        </p>
        <p>
          <strong>Department:</strong> {studentData.department}
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
      <table className="w-full border border-gray-800 rounded-md">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2">S/N</th>
            <th className="p-2">Reg Number</th>
            <th className="p-2">Name</th>
            <th className="p-2">Pay Amount</th>
            <th className="p-2">Description</th>
            <th className="p-2">Dept</th>
            <th className="p-2">Faculty</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory.map((transaction, index) => (
            <tr key={index}>
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{transaction.regNumber}</td>
              <td className="p-2">{transaction.name}</td>
              <td className="p-2">{transaction.payAmount}</td>
              <td className="p-2">{transaction.description}</td>
              <td className="p-2">{transaction.department}</td>
              <td className="p-2">{transaction.faculty}</td>
              <td className="p-2">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPage;
