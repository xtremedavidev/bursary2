import React, { useEffect, useState } from "react";

const ReportsPage = () => {
  const [datagotten, setData] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);
  const [csvData, setCsvData] = useState(null);

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
        setData(data.data);
        setTotalStudents(data.totalStudents);
        setTotalAmountPaid(data.totalAmountPaid);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const generateCsvData = (data) => {
    // Create CSV data as a string
    const header = "Faculty,Part 1,Part 2,Part 3,Part 4,Part 5,Part 6,No Part,Total\n";
    const rows = datagotten
      .map((item) => [
        item.faculty,
        item.counts[1] || 0,
        item.counts[2] || 0,
        item.counts[3] || 0,
        item.counts[4] || 0,
        item.counts[5] || 0,
        item.counts[6] || 0,
        item.counts.null || 0,
        sumdata(item.counts),
      ])
      .map((row) => row.join(","))
      .join("\n");
    return header + rows;
  };

  const convertToCsv = () => {
    
    const csvData = generateCsvData();
    
    if (csvData) {
      // Download the CSV file
      const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvData}`);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "student_data.csv");
      document.body.appendChild(link); // Required for FF
      link.click();
    }
  };
  
  const sumdata = (counts) => {
    if (counts) {
      const storecount = [];
      Object.keys(counts).forEach((key) => {
        const count = counts[key];
        const parsedCount = parseInt(count, 10) || 0;
        storecount.push(parsedCount);
      });

      return storecount.reduce((total, count) => total + count, 0);
    }

    return 0;
  };

  useEffect(() => {
    runOnceOnPageLoad();
  }, []);

  return (
    <div className="w-screen flex flex-col bg-white h-screen overflow-y-auto">
      <div className="text-center text-sm text-gray-900 p-8">
        {/* <p className="md:text-lg font-semibold">
          Total Number of Students Fetched: {totalStudents}
        </p>
        <p className="md:text-lg font-semibold">
          Total Amount Paid: {totalAmountPaid}
        </p> */}
        <button
          onClick={convertToCsv}
          className="p-4 m-6 bg-blue-400 text-white rounded-lg"
        >
          Convert to CSV
        </button>
        {csvData && (
          <a
            href={`data:text/csv;charset=utf-8,${encodeURI(csvData)}`}
            download="student_data.csv"
            className="p-4 m-6 bg-blue-400 text-white rounded-lg"
          >
            Download CSV
          </a>
        )}
      </div>

      <div className="mx-auto md:px-20 w-screen p-4 h-full overflow-x-auto">
        <table className="w-full h-full mx-auto bg-gray-900 shadow-md rounded-2xl ">
          <thead className="text-gray-900 text-center bg-gray-300 p-2 rounded-2xl">
            <tr>
              <th className="px-4 py-2">Faculty</th>
              <th className="px-4 py-2">Part 1</th>
              <th className="px-4 py-2">Part 2</th>
              <th className="px-4 py-2">Part 3</th>
              <th className="px-4 py-2">Part 4</th>
              <th className="px-4 py-2">Part 5</th>
              <th className="px-4 py-2">Part 6</th>
              <th className="px-4 py-2">No Part</th>
              <th className="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {datagotten.map((data) => (
              <tr key={data.faculty}>
                <td className="px-4 py-2">{data.faculty}</td>
                <td className="px-4 py-2">{data.counts[1]}</td>
                <td className="px-4 py-2">{data.counts[2]}</td>
                <td className="px-4 py-2">{data.counts[3]}</td>
                <td className="px-4 py-2">{data.counts[4]}</td>
                <td className="px-4 py-2">{data.counts[5]}</td>
                <td className="px-4 py-2">{data.counts[6]}</td>
                <td className="px-4 py-2">{data.counts.null}</td>
                <td className="px-4 py-2">{sumdata(data.counts)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsPage;
