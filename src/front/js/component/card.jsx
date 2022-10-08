import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BasicExample({ detail, id, type }) {
    
    const navigate = useNavigate();

  return (
    <Card className="col-10" style={{width:"250px", height:"350px", margin: "10px"}}>
      <Card.Img
       variant="top" 
       src={'https://starwars-visualguide.com/assets/img/8{
        type == "people" ? "characters" : type
      }/${id}.jpg'}
        />
      <Card.Body>
        <Card.Title>{detail.name}</Card.Title>
        <Card.Text>Height : {detail.height}</Card.Text>
        <Button variant="primary" onClick={ () => navigate(`/${type}/${id}`)}
        >Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;