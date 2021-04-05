import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"

import NASA from "./NASA"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col } from "react-bootstrap";

function App() {
  const [nasa, setNasa]= useState([])
  useEffect(()=> {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=77k19H4LulMCZJOvU6MFEDNEd74j706mwB9mmoBh")
    .then(res =>
        {
        

         setNasa(res.data)}).catch(err => console.log(err))})
  return (
    <div className="App">
     <NASA nasaProp ={nasa}/>
     
    </div>

    
  );
}

export default App;
