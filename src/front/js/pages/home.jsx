import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../component/card.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="personajes">
        <h1 className="titulo">Characters</h1>

        <div className="d-flex flex-row flex-nowrap overflow-auto card">
          {store.people.map((personaje, index) => {
            return (
              <Card
                key={personaje.name}
                detail={personaje}
                type="people"
                id={index + 1}
              />
            );
          })}
        </div>
      </div>
      <div className="planetas">
        <h1 className="titulo">Planets</h1>

        <div className="d-flex flex-row flex-nowrap overflow-auto card">
          {store.planet.map((planeta, index) => {
            return (
              <Card
                key={planeta.name}
                detail={planeta}
                type="planets"
                id={index + 1}
              />
            );
          })}
        </div>
        {store.favorites.map((favorite) => {
          return <h1 key={favorite.name}>{favorite.name}</h1>;
        })}
      </div>
    </>
  );
};
