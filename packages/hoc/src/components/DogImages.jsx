import React from "react";
import withLoader from '../hoc/withLoader';
import {LABRADOR_IMAGES_ENDPOINT} from "../constants";
import useHover from "../hooks/useHover";

const DogImages = ({data}) => {

    const [ref, hovering] = useHover();

    return (
        <>
            {hovering && <div id="hover">hovering</div>}
            <div id="list" ref={ref}>
                {data.map((dog, i) => <img src={dog} key={i} alt="Dog" />)}
            </div>

        </>
    );
}

export default withLoader(DogImages, LABRADOR_IMAGES_ENDPOINT);
