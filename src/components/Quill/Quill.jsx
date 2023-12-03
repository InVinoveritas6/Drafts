import React, { useState } from "react";
import axios from "axios";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Quill = () => {
  const [testObj, setTestObj] = useState();

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['link', 'image'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ];

  const handleClick = () => {
    axios.post('http://localhost:9999', testObj)
      .then(alert('great'))
      .catch(alert('error'))
  }

  const module = {
    toolbar: toolbarOptions,
  };

  return (
    <div style={{background: '#fff'}}>
      Quill
      <ReactQuill
        modules={module}
        theme="snow"
        onChange={(a) => setTestObj(a)}
      />
      <button onClick={() => handleClick()}>Send</button>
    </div>
  );
};

export default Quill;
