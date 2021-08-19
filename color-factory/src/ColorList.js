import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({ colors }) {
    return (
        <>  <div className="header">
                <h1>Welcome to the Color factory!</h1>
                <button><Link to="/colors/new">Add Color</Link></button>
            </div>
            <div className="content">
                <h2>Colors:</h2>
                <ul>
                    {colors.map((color) => (
                        <li key={color.name}><Link to={`/colors/${color.name}`}>{color.name}</Link></li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ColorList;