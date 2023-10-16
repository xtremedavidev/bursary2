import React from "react";

const PartSelect = ({ selectedPart, onPartChange }) => {
  return (
    <div className="flex-1 m-2">
      <label htmlFor="part" className="block text-sm font-medium">
        Select Part
      </label>
      <select
        id="part"
        name="part"
        value={selectedPart}
        onChange={(e) => onPartChange(e.target.value)}
        className="mt-1 p-2 border-gray-200 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value=""></option>
        {/* Add your part options here */}
        <option value="1">Part 1</option>
        <option value="2">Part 2</option>
        <option value="3">Part 3</option>
        <option value="4">Part 4</option>
        <option value="5">Part 5</option>
        <option value="6">Part 6</option>
      </select>
    </div>
  );
};

export default PartSelect;
