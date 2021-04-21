import React from "react";
import ImageList from "./Component/ImageList";
import "./App.css";


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>YUO</span>!
      </p>

      <br/>
      <ImageList/>
      
    </div>
  );
}

export default App;
