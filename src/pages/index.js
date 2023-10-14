import React, { useState } from "react";
import Layout from '../components/Layout';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

export default function HomePage() {
  const [datagotten, setTableData] = useState([]); // State to store the table data

  const handleDataFetched = (datagotten) => {
    // Update the tableData state with the fetched data
    setTableData(datagotten);
  };

  return (
    <Layout>
      <Header onDataFetched={handleDataFetched} />
      <div className='m-4'>
        <Table className="w-full" data={datagotten} /> {/* Pass the data to the Table component */}
      </div>
      <Pagination
        totalItems={datagotten.length}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={() => {}}
      />
    </Layout>
  );
}
