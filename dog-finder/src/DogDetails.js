import React from "react";
import { useParams } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({ dogs }) {
    const { name } = useParams();
    const dog = dogs.find(dog => dog.name === name);

    return(
        <div className="Details">
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name}></img>
            <p>Age: {dog.age}</p>
            <p>Facts about {dog.name}:</p>
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
        </div>
    );
}

export default DogDetails;