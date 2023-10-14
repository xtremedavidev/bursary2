import { useState } from 'react';

export default function SessionSelect() {
  const [selectedSession, setSelectedSession] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedSession(value);

    // You can perform additional actions here (e.g., fetching data based on the selected session).
  };

  return (
    <div className="flex-1 mx-10">
      <label htmlFor="session" className="block text-sm font-medium text-black">Select Session</label>
      <select
        id="session"
        value={selectedSession}
        onChange={handleChange}
        className="mt-1 bg-gray-100 p-2 w-full border-gray-200 block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">Select a session</option>
        {/* Map over your session options or fetch them from an API */}

        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>


      </select>
    </div>
  );
}
