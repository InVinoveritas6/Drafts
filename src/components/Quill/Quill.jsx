import React from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Quill = () => {
  var toolbarOptions = [
    ["bold", "italic", "underline"],
    ["link", "image"],
    [{ size: [] }],
    [{'color': []}],
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
