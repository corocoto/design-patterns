import React from "react";

// Constants
import { imageSources } from "./constants";

// Components
import Image from '../Image';

const ImageList = () => {
  return imageSources.map((source) => <Image source={source} key={source} />);
};

export default ImageList;

