import React,{useState , useEffect} from "react";
import axios from "axios";
import '../App.css'
import {
    Card, CardText, CardBody,
    CardHeader, CardSubtitle,CardImg,Row
  } from 'reactstrap';

function Nasa() {
    const [nasa, setNasa] = useState([])


    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=sjJSnLOANx5tqmf2MGRXOLL6iJfboNhPRkaJ4kAN")
        .then((res) => {
            setNasa(res.data)
        })
        .catch((error) => console.log(error))
    }, [])

    return (
      
        <div className="container-fluid">
       
       <Card className="col-11  d-flex  flex-row mt center">
       <Row className="col-6">
       <CardImg width="100%" src={nasa.url}    alt="Card image cap" />
       </Row>
               

            <CardBody className="col-5 cardbody">
            <CardHeader  className=" display-4 primary-heading">{nasa.title}</CardHeader>
            <CardText className="text-start p-3 explain-text"><b>Explanation </b>: {nasa.explanation}</CardText>
            <CardText className='text-end date-text'><b>Copyright:</b> Nasa type is {nasa.media_type} ,{nasa.date} </CardText>
 
            </CardBody>
            </Card>             

        </div>

    );  
    

};

export default Nasa;