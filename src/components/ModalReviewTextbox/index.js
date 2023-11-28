import React, { useState } from 'react';
import "./ModalReviewTextbox.css";

const ExpandingTextarea = ({ handleInputChange, text: initialText }) => {
  const [internalText, setInternalText] = useState('');

  const handleInputChangeInternal = (event) => {
    setInternalText(event.target.value);
    autoExpand();
    handleInputChange(event);
  };

  const autoExpand = () => {
    const textarea = document.getElementById('myTextarea');
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  };

  return (
    <div>
      <label>What do you think?</label>
      <textarea
        className='mt-3'
        id="myTextarea"
        value={internalText}
        onChange={handleInputChangeInternal}
        onInput={autoExpand}
        placeholder="Type something..."
      />
    </div>
  );
};

export default ExpandingTextarea;
