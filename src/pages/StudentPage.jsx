import Table from '@/components/Table';
import { useEffect, useState } from 'react';

// Sample student data


const [datagotten, setTableData] = useState([]); // State to store the table data



const StudentPage = () => {



  const runOnceOnPageLoad = () => {
    fetch(`https://bursarybackend.onrender.com/reports`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("API request failed");
        }
      })
      .then((data) => {
        setTableData(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  useEffect(() => {
    // Call the function when the component is mounted (page is loaded)
    runOnceOnPageLoad();
  }, []);






  return (
    <div className="container mx-auto p-4">
      {/* <h2 className="text-2xl font-semibold mb-4">Student Information</h2>
      <div className="border border-gray-300 p-4 rounded-md mb-6">
        <p>
          <strong>Name:</strong> {datagotten.Names}
        </p>
        <p>
          <strong>Matric Number:</strong> {studentData.RegNo}
        </p>
        <p>
          <strong>Faculty:</strong> {studentData.faculty}
        </p>
     
        <p>
          <strong>Department:</strong> {studentData.DeptName}
        </p>
      </div> */}

      <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
      <Table data={datagotten} />
    </div>
  );
};

export default StudentPage;
