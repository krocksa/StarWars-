import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../component/card.jsx";

export const Home = () => {
	//const { store, actions } = useContext(Context);
	const [ people, setPeople ] = useState([]);
	const [ planet, setPlanet ] = useState([]);

	const navigate = useNavigate();
	
	const urlpersonajes = 'https://swapi.dev/api/people';

	useEffect(()=> {
			fetch(urlpersonajes).then(response => response.json()).then(data => setPeople(data.results))
	},[])

	const urlplanetas = 'https://swapi.dev/api/planets';

	useEffect(()=> {
			fetch(urlplanetas).then(response => response.json()).then(data => setPlanet(data.results))
	},[])

	return (
		<>
		<div className="personajes">
			<h1 className="titulo">
				Characters
			</h1>
		
			<div className="d-flex flex-row flex-nowrap overflow-auto card">
			{
				people.map((personaje,index)=>{
					return(
						<Card
						key={personaje.name}
						detail={personaje}
						type="people"
						id={index + 1}
						/>
					)
				})
			}
			</div>
			</div>
			<div className="planetas">
			<h1 className="titulo">
				Planets
			</h1>
		
			<div className="d-flex flex-row flex-nowrap overflow-auto card">
			{
				planet.map((planeta,index)=>{
					return(
						<Card
						key={planeta.name}
						detail={planeta}
						type="planets"
						id={index + 1}
						/>
					)
				})
			}
			</div>
			</div>
			</>
	);};
