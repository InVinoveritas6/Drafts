import React from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Quill = () => {
  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ];

  const module = {
    toolbar: toolbarOptions,
  };

  return (
    <div style={{background: '#fff'}}>
      Quill
      <ReactQuill
        modules={module}
        theme="snow"
        onChange={(a) => console.log(a)}
      />
    </div>
  );
};

export default Quill;
