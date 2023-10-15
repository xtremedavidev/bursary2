import React, { useState, useEffect } from "react";
import SessionSelect from "./SessionSelect";
import SemesterSelect from "./SemesterSelect";
import FacultySelect from "./FacultySelect";
import PartSelect from "./PartSelect";
import SelectDepartment from "./SelectDepartment"; // Import the new component
import departments from "./departments";

export default function Header({ onDataFetched }) {
  const [datagotten, setData] = useState([]); // State to store the fetched data
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedPart, setSelectedPart] = useState(""); // Define selectedPart state
  const [selectedSession, setselectedSession] = useState([]);


const runOnceOnPageLoad = () => {
  console.log('This runs once when the page is loaded.');
  fetch(`https://bursarybackend.onrender.com/getData`)
  .then((response) => {
    if (response.ok) {
      // Assuming the response is in JSON format
      return response.json(); // Corrected this line
    } else {
      // Handle API request errors
      throw new Error("API request failed");
    }
  })
  .then((data) => {
    // Update the tableData state with the data from the API response
    console.log("data table", data.data)

    setData(data.data);
    onDataFetched(data.data);
    
  })
  .catch((error) => {
    // Handle network errors or other exceptions
    console.error(error);
  });
};


useEffect(() => {
  // Call the function when the component is mounted (page is loaded)
  runOnceOnPageLoad();
}, []); 
  

  const [courses, setCourses] = useState([]);

  const faculties = Object.keys(departments);

  const onsessionChange = (selectedSession1) => {
      setselectedSession(selectedSession1)  }

  const handleFacultyChange = (faculty) => {
    setSelectedFaculty(faculty);
    setSelectedDepartment(""); // Reset the selected department when the faculty changes
    const depts = departments[faculty] || [];
    setCourses(depts);
  };

  const onPartChange = (part) => {
    setSelectedPart(part);
  };

  const handleSubmit = () => {
    // Prepare the data to send to the API
    const queryParams = {};

    if (selectedSession) {
      queryParams.session = selectedSession;
    }
    
    // if (selectedSemester) {
    //   queryParams.semester = selectedSemester;
    // }
    
    if (selectedFaculty) {
      queryParams.faculty = selectedFaculty;
    }
    
    if (selectedPart) {
      queryParams.part = selectedPart;
    }
    
    if (selectedDepartment) {
      queryParams.department = selectedDepartment;
    }

    queryParams.pages = 1;
    queryParams.description = "Late Registration";
    // queryParams.matricNo = "EGL/2017/303"; 

    
    const queryString = new URLSearchParams(queryParams).toString();
    console.log(queryString)
    

    fetch(`https://bursarybackend.onrender.com/getData?${queryString}`)
    .then((response) => {
      if (response.ok) {
        // Assuming the response is in JSON format
        return response.json(); // Corrected this line
      } else {
        // Handle API request errors
        throw new Error("API request failed");
      }
    })
    .then((data) => {
      // Update the tableData state with the data from the API response
      console.log("data table", data.data)

      setData(data.data);
      onDataFetched(data.data);
      
    })
    .catch((error) => {
      // Handle network errors or other exceptions
      console.error(error);
    });
  
  };
  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
  };

  return (
    <header className="bg-blue-900 py-4">
      <div className="container mx-auto flex flex-col pl-8 text-black items-center justify-between">
        <h1 className="text-2xl text-white font-semibold pb-4">Dashboard</h1>
        <div className="w-full grid grid-cols-1 gap-4">
          <div className="flex w-full space-x-4">
            <SessionSelect className="flex-1 text-black" SessionSelect={selectedSession} onsessionChange={onsessionChange} />
            <SemesterSelect className="flex-1" semesters={courses} />
          </div>

          <div className="flex w-full space-x-4">
            <FacultySelect
              className="flex-1"
              faculties={faculties}
              onSelect={handleFacultyChange}
            />
            <SelectDepartment
              className="flex-1"
              faculties={faculties}
              departments={departments}
              selectedFaculty={selectedFaculty}
              onFacultyChange={handleFacultyChange}
              selectedDepartment={selectedDepartment}
              onDepartmentChange={handleDepartmentChange}
            />
          </div>

          <div className="flex space-x-4">
            <PartSelect className="flex-1" onPartChange={onPartChange} />
          </div>

          <button
            onClick={handleSubmit}
            className="p-4 mx-auto w-fit justify-center bg-blue-200 text-color-white rounded-lg"
          >
            Fetch
          </button>
        </div>
      </div>
    </header>
  );
}
