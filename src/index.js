import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().getHours();
//you can chenge the time here↑, for example, new Date(2021, 5, 10, 13)
const customStyle = {
  color: ""
};

let greeting;

if (currentTime > 0 && currentTime < 12) {
  greeting = "Good mornig";
  customStyle.color = "red";
} else if (currentTime >= 12 && currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
