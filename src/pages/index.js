import React, { useState } from "react";
import Layout from '../components/Layout';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

export default function HomePage() {
  const [datagotten, setTableData] = useState([]); // State to store the table data
  const [page, setPage] = useState(); // State to store the table data
  const [sort, setsort] = useState(""); // State to store the table data


  const handleDataFetched = (datagotten) => {
    // Update the tableData state with the fetched data
    setTableData(datagotten);
  };

  const handlepageset = (pageset) => {
    // Update the tableData state with the fetched data
    setPage(pageset);
  };

  const onsortchange = (sortitem)=>{
    setsort(sortitem)
  }
  
  return (
    <Layout className="w-screen">
      <Header onDataFetched={handleDataFetched} page={page} sort={sort} />
      <div className='w-screen flex justify-center flex-col'>
        <Table data={datagotten} page={page} onPageChange={handlepageset} onsortchange={onsortchange} selectedsort = {sort} /> {/* Pass the data to the Table component */}
      </div>
      
    </Layout>
  );
}
