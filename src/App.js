import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState('');

  const formatTime = (value) => {
    if (value < 10) {
      return '0';
    } else {
      return '';
    }
  }

  const 

useEffect(() =>{
  //interval
  const timerID = setInterval(() => tick(), 1000);

  return function cleanup(){
    clearInterval(timerID);
  }
})

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
