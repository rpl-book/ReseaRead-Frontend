import React, { useState } from 'react';
import "./Checkbox.css";

const Checkbox = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div checkbox-content>
      <label>
        <input 
          className="mr-2"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />Post To My Feeds
      </label>
    </div>
  );
};

export default Checkbox;
