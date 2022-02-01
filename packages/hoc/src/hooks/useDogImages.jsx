import {useState, useEffect} from "react";

const useDogImages = () => {
    const [dogImages, setDogImages] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://dog.ceo/api/breed/labrador/images/random/6");
            const {message} = await response.json();
            setDogImages(message);
        })();
    }, [])
    return dogImages;
}

export default useDogImages;