import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
    return (
        <nav className="NavBar">
            <NavLink exact to="/dogs">Home</NavLink>
            {dogs.map((dog) => (
                <NavLink exact key={dog.name} to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
            ))}
        </nav>
    );
}

export default Nav;