import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import { 
    Col, 
    Card, 
    CardHeader, 
    CardBody,
    CardTitle, 
    CardText,
    Container,
     Row } from 'reactstrap';

function NASA(props) {
    const {nasaProp} = props



    return (
        <Card>
            <CardBody>

                <CardHeader>                NASA Photo of the Day
</CardHeader>
<CardTitle> Date: {nasaProp.date} </CardTitle>

<CardText>
    Description: {nasaProp.explanation}
</CardText>
<CardText>
    <img src={nasaProp.url}/>
</CardText>

            </CardBody>
        </Card>
)
}

export default NASA