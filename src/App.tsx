import React from 'react';
import Button from './components/Button'
import './App.css';
function App() {
  const handleChange = () => {
    console.log("clicked")
  }
  
  return (
    <div className="App">
      <Button onClick={handleChange} text='Button' edges='round'/>
    </div>
  );
      
}

export default App;
