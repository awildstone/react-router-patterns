import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewColor.css";

function NewColor({ addColor }) {
    const [formData, setFormData] = useState({});
    const history = useHistory();

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
      };
    
      const handleSubmit = (evt) => {
        evt.preventDefault();
        addColor({ name: formData.name, hex: formData.hex });
        history.push("/colors");
      };

    return (
        <div className="NewColor">
            <h1>Select a Color</h1>
            <form onSubmit={ handleSubmit }>
                <p>
                    <label htmlFor="name">Color Name:</label>
                    <input type="text" name="name" id="name" onChange={handleChange}></input>
                </p>
                <p>
                    <label htmlFor="hex">Color Value:</label>
                    <input type="color" name="hex" id="hex" onChange={handleChange}></input>
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewColor;