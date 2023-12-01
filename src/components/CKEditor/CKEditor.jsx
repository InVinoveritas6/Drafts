import React from "react";

//components
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

//style
import './CKEditorStyle.css'

const CustomCKEditor = () => {
    // ClassicEditor.create(document.querySelector('#editor'), {
    //     fontSize: {
    //         option: [
    //             'tiny',
    //             'default',
    //             'big'
    //         ],
    //         toolbar: [
    //             'heading', 'bulletedList', 'numberedList', 'fontSize', 'undo', 'redo'
    //         ]
    //     }
    // })

  return (
    <div>
      CKEditor
      <CKEditor
        editor={ ClassicEditor }
        config={{
            fontFamily: {
                options: [
                    'default',
                    'Ubuntu, Arial, sans-serif',
                    'Ubuntu Mono, Courier New, Courier, monospace'
                ]
            },
            toolbar: [
                'heading', 'bulletedList', 'numberedList', 'fontFamily', 'undo', 'redo'
            ]
        }}
        onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
        } }
        onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
        } }
    />
    </div>
  );
};

export default CustomCKEditor;
