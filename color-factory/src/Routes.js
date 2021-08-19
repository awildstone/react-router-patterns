import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColor from "./NewColor";
import "./Routes.css";

function Routes() {
  const history = useHistory();

  //Sets initial colors data from localstorage if exists, else sets default data.
  const [ colors, setColors ] = useState(() => {
    if (JSON.parse(window.localStorage.getItem('colors'))) {
      return JSON.parse(window.localStorage.getItem('colors'));
    } else {
      return [
        { name: "red", hex: "#ff0000" },
        { name: "green", hex: "#00ff00" },
        { name: "blue", hex: "#0000ff" }
      ]
    }
  });

  //updates localstorage with any colors data in state
  useEffect(() => {
    window.localStorage.setItem("colors", JSON.stringify(colors))
  }, [colors]);
  
  //handles adding a new color to state
  const handleAddColor = (newColor) => {
    setColors(currentColors => ([...currentColors, newColor]));
  };

  //checks the current color name in the url params and renders the color if it exists, otherwise redirects
  const getCurrentColor = (props) => {
    const { colorName } = props.match.params;
    const color = colors.find(color => color.name === colorName);
    if (color) {
      return <Color hex={color.hex} name={color.name} />;
    } else {
      history.push("/colors");
    }
  };

  return (
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColor addColor={handleAddColor}/>
        </Route>
        <Route path="/colors/:colorName" render={getCurrentColor} />
        <Redirect to="/colors" />
      </Switch>
  );
}

export default Routes;