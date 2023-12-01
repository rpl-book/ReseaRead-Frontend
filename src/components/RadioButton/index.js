import React, { useState } from 'react';
import "./RadioButton.css"; 

const RadioButtonExample = () => {
  // State untuk menyimpan nilai radio button yang dipilih
  const [selectedOption, setSelectedOption] = useState(null);

  // Handler untuk memperbarui nilai radio button yang dipilih
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='flex'>
      <label className='ml-1 mr-9 flex'>
        <input type="radio" value="A" checked={selectedOption === "A"} onChange={handleOptionChange}/>
        <p className='mt-1 ml-2'>all</p>
      </label>

      <label className='mr-9 flex'>
        <input type="radio" value="B" checked={selectedOption === "B"} onChange={handleOptionChange}/>
        <p className='mt-1 ml-2'>title</p>
      </label>

      <label className='mr-9 flex'>
        <input type="radio" value="C" checked={selectedOption === "C"} onChange={handleOptionChange}/>
        <p className='mt-1 ml-2'>author</p>
      </label>
    </div>
  );
};

export default RadioButtonExample;
