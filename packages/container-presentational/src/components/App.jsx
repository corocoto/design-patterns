import React from "react";
import DogImagesContainer from "./DogImagesContainer";
import "../styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        Browse Dog Images{" "}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImagesContainer />
    </div>
  );
}