import React, { useState } from "react";
import "./AddToLibraryButton.css";

const options = [
  { key: "reading", label: "Reading" },
  { key: "wantToRead", label: "Want to Read" },
  { key: "foodForThoughts", label: "Food for Thoughts" },
];

function AddToLibraryButton() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
    setShowDropdown(false);
  };

  return (
    <div className="App">
      <div className="container">
        <button onClick={handleButtonClick}>
          {selectedOption ? selectedOption.label : "Add to Library"}
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            {options.map((option) => (
              <button
                key={option.key}
                onClick={() => handleOptionClick(option)}
                style={{
                  backgroundColor: option === selectedOption ? "#DA5E42" : "",
                  color: option === selectedOption ? "white" : "",
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AddToLibraryButton;
