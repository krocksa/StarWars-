import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

function BasicExample({ detail, id, type }) {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // if (type == 'people') {

  //   <Card.Text className='agregar'>
  //       Height : {detail.height} <br /> Hair Color : {detail.hair_color} <br /> Eye Color : {detail.eye_color}
  //     </Card.Text>

  // } else {
  //   <Card.Text className='agregar'>
  //   Terrain : {detail.terrain} <br /> Population : {detail.population}
  //     </Card.Text>
  // }

  return (
    <Card
      className="col-10"
      style={{ width: "250px", height: "450px", margin: "10px" }}
    >
      <Card.Img
        className="imgcard"
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/${
          type == "people" ? "characters" : type
        }/${id}.jpg`}
      />
      <Card.Body className="detalles">
        <Card.Title>{detail.name}</Card.Title>
        <Card.Text>
          Height : {detail.height} <br />
          Hair Color : {detail.hair_color} <br />
          Terrain : {detail.population}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/${type}/${id}`)}>
          Learn More
        </Button>
        <Button
          variant="outline-warning"
          onClick={() => actions.manageFavorites(detail.name)}
        >
          {actions.isIn(store.favorites, detail.name) ? (
            <i class="fas fa-heart"></i>
          ) : (
            <i class="far fa-heart"></i>
          )}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
