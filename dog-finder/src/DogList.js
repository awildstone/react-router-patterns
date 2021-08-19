import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    return (
        <>
        <h1>Dogs!</h1>
        <ul>
            {dogs.map((dog) => (
                <li key={dog.name}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
            ))}
        </ul>
        </>
    );
}

export default DogList;