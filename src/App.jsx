import { useState } from 'react';
import './App.css';

//Components
import CustomTabs from './components/CustomTabs/CustomTabs';
import CustomCKEditor from './components/CKEditor/CKEditor';
import Quill from './components/Quill/Quill';

function App() {


  return (
    <div className="App">
        {/* <CustomInput value={value} setValue={setValue} label={'test'} required />
        <CustomCalendarInput value={calendarValue} setValue={setCalendarValue} label={'Период до'}  /> */}
        {/* <CustomTabs /> */}
        {/* <CustomCKEditor /> */}
        <Quill />
        
    </div>
  );
}

export default App;
