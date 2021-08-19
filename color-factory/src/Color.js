import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

function Color({ hex, name }) {
    return(
        <div className="Color" style={{ backgroundColor: hex }}>
            <h1>This is {name}</h1>
            <h2>Isn't it lovely???</h2>
            <button><Link to="/colors">Back</Link></button>
        </div>
    );
}

export default Color;