import React from "react";

export default function DogImages({ dogs }) {
  return dogs.map((dog) => <img key={dog} src={dog} alt="Dog" />)
}