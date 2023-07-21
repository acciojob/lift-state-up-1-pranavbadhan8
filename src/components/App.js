
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

   let [value,setValue] = useState();

    let clicking = () => 
    setValue("Modal Content \n This is the modal content")

  return (
    <div className="container">
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
          <div className="child">
              <h2>Child Component</h2>
              <button onClick={clicking}>Show Modal</button>
              <p>{value}</p>  
          </div>
        </div>
    </div>
  )
}

export default App
