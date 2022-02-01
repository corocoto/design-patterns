import React from "react";
import withLoader from '../hoc/withLoader';
import {LABRADOR_IMAGES_ENDPOINT} from "../constants";

const DogImages = ({data}) => {
    return data.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
}

export default withLoader(DogImages, LABRADOR_IMAGES_ENDPOINT);
