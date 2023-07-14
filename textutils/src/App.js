import Navbar from './components/Navbar';
import React, {useState}  from 'react';
import Textform from './components/Textform';

import './App.css';
function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=() =>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="Textify" mode={mode} toggleMode={toggleMode} />
    
    <div className="container my-3">
    <Textform heading="Enter your Text" mode={mode} />
    </div>
    
    </>
    
  );
}

export default App;
