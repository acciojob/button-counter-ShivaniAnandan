
import React from "react";
import './../styles/App.css';

const App = () => {
  
  let [count,setCount]=useState(0);

  function onsubmit(){
    setCount(count+1);
  }

  return (
    <div>
        <P>Button clicked {count} times</P>
        <button onClick={onsubmit}>Click me</button>
    </div>
  )
}

export default App
