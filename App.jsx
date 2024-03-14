import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello"); // can create multiple states
  const [isMousedOver, setMouseOver] = useState(false); // mouse is starting false meaning its not hovering over the button

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }} // style changes the background color to black if isMousedOver otherwise white
        onClick={handleClick} // when the user clicks it triggers the handleClick function
        onMouseOver={handleMouseOver} // onMouseOver triggers a function called handleMouseOver. This function triggers when the user hovers their mouse over the button
        onMouseOut={handleMouseOut} // When the mouse leaves the button it triggers the handleMouseOut function which returns our setMouseOver function and useState back to false
      >
        Submit
      </button>
    </div>
  );
}

export default App;
