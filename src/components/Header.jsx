import React, { useState, useEffect } from "react";
import SessionSelect from "./SessionSelect";
import SemesterSelect from "./SemesterSelect";
import FacultySelect from "./FacultySelect";
import PartSelect from "./PartSelect";
import SelectDepartment from "./SelectDepartment"; // Import the new component
import departments from "./departments";
import SelectDescription from "./SelectDescription";
import RegNumberSearch from "./RegNumberSearch";

export default function Header({ onDataFetched, page, sort}) {
  const [datagotten, setData] = useState([]); // State to store the fetched data
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedPart, setSelectedPart] = useState(""); // Define selectedPart state
  const [regNumber, setRegNumber] = useState("");

  const [selectedDescription, setSelectedDesc] = useState(""); // Define selectedPart state
  const [selectedSession, setselectedSession] = useState("");

  const runOnceOnPageLoad = () => {
    console.log("This runs once when the page is loaded.");
    fetch(`https://bursarybackend.onrender.com/fetchDataForDownload`)
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
        console.log("data table", data.data);

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
    setselectedSession(selectedSession1);
  };

  const handleFacultyChange = (faculty) => {
    setSelectedFaculty(faculty);
    setSelectedDepartment(""); // Reset the selected department when the faculty changes
    const depts = departments[faculty] || [];
    setCourses(depts);
  };

  const onDescriptionChange = (selectedDescription) => {
    setSelectedDesc(selectedDescription);
  };



  const onPartChange = (part) => {
    setSelectedPart(part);
  };

  const handleSubmit = () => {
    console.log("reg", regNumber)
    if (regNumber) {
      fetch(`https://bursarybackend.onrender.com/getData?matricNo=${regNumber}`)
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
          console.log("data table", data.data);

          setData(data.data);
          onDataFetched(data.data);
        })
        .catch((error) => {
          // Handle network errors or other exceptions
          console.error(error);
        });
    } else {
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

      if (selectedDescription) {
        queryParams.description = selectedDescription;
      }

      queryParams.pages = 1;
      // queryParams.matricNo = "EGL/2017/303";

      const queryString = new URLSearchParams(queryParams).toString();
      console.log(queryString);

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
          console.log("data table", data.data);

          setData(data.data);
          onDataFetched(data.data);
        })
        .catch((error) => {
          // Handle network errors or other exceptions
          console.error(error);
        });
    }
  };



  const setRegNumber1 = (regNumber1)=>{

    setRegNumber(regNumber1);

  }




  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
  };

  return (
    <header className=" md:ml-64  bg-gray-200 py-6">
    <div className=" mx-auto px-4 text-black items-center">
      <h1 className="text-2xl font-semibold pb-4">Dashboard</h1>
      <RegNumberSearch
        className="w-full mb-4"
        setRegNumber1={setRegNumber1}
        regNumber={regNumber}
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <SessionSelect
            className="w-full text-black"
            onsessionChange={onsessionChange}
          />
          <SemesterSelect className="w-full" semesters={courses} />
        </div>

        <div className="space-y-4">
          <FacultySelect
            className="w-full"
            faculties={faculties}
            onSelect={handleFacultyChange}
          />
          <SelectDepartment
            className="w-full"
            faculties={faculties}
            departments={departments}
            selectedFaculty={selectedFaculty}
            onFacultyChange={handleFacultyChange}
            selectedDepartment={selectedDepartment}
            onDepartmentChange={handleDepartmentChange}
          />
        </div>

        <div className="space-y-4">
          <PartSelect className="w-full" onPartChange={onPartChange} />
          <SelectDescription
            className="w-full"
            onDescriptionChange={onDescriptionChange}
            selectedDescription={selectedDescription}
          />
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="p-4 m-8 w-fit justify-center bg-blue-200 text-color-white rounded-full hover:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Submit
        </button>
      </div>
    </div>
  </header>
  );
}
