"use client";

import { useState } from "react";

export default function Calculator() {
  const [inputs, setInputs] = useState([40]); // Initial state with one input

  const handleChange = (index: number, value: number) => {
    setInputs((prev) => prev.map((val, i) => (i === index ? value : val)));
  };

  const addInput = () => {
    setInputs((prev) => [...prev, 50]); // Add a new input with a default value
  };

  const removeInput = (index: number) => {
    setInputs((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dynamic Range Inputs</h1>
      {inputs.map((value, index) => (
        <div key={index} className="mb-4 flex items-center gap-4">
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            className="range"
            onChange={(e) => handleChange(index, Number(e.target.value))}
          />
          <span>{value}</span>
          <button
            onClick={() => removeInput(index)}
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addInput}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Input
      </button>
    </div>
  );
}
