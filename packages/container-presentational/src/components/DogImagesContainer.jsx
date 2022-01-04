import React, {useState, useEffect} from "react";
import DogImages from "./DogImages";

export default function DogImagesContainer(props) {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://dog.ceo/api/breed/labrador/images/random/6");
      const jsonResponse = await response.json();
      setDogs(jsonResponse.message)
    })();
  }, [])

  return (
    <DogImages dogs={dogs} />
  );
};