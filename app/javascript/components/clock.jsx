import React from 'react';
import ReactDOM from 'react-dom'; // you used 'react-dom' as 'ReactDOM'
import { useState, useEffect } from 'react';


function Clock(){
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span>
      {date.toLocaleTimeString()}
    </span>
  );
}
export default Clock;


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Clock />,
    document.getElementById("root"),
  )
})
