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
		
			<div >
			{
				people.map((personaje,index)=>{
					return(
						<Card className="d-flex flex-row flex-nowrap overflow-auto card" style={{width:"250px", height:"350px", margin: "10px"}}
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
						<div className="col-10 border" key={index} style={{width:"250px", height:"350px", margin: "10px"}}>
							<img src={planeta.url} className="card-img-top" alt=""></img>
							<div className="card-body">
								<h4 className="card-title">{planeta.name}</h4>
								<div className="card-text">
								Population: {planeta.population} <br />
								Terrain : {planeta.terrain} <br />
								</div>
								<div className="ml-auto">
									{/* <Link to="/demo"> */}
									<br />
										<button onClick={() => navigate("/demo")} className="btn btn-primary">Learn More</button>
									{/* </Link> */}
								</div>
							</div>
						</div>
					)
				})
			}
			</div>
			</div>
			</>
	);};
