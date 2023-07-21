
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

   let [ans,setAns] = useState();

    let clicking = () => 
    setAns('Modal Content'); 
    
  return (
    <div className="container">
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
          <div className="child">
              <h2>Child Component</h2>
              <button onClick={clicking}>Show Modal</button>
              <h3>{ans}</h3>
              <p>{ans}</p>
          </div>
        </div>
    </div>
  )
}

export default App
