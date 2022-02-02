import {useState, useRef, useEffect} from "react";

const useHover = () => {
    const [isHover, setIsHover] = useState(false);
    const node = useRef(null);

    const handleMouseOverEvent = () => {
        setIsHover(true);
    };

    const handleMouseOutEvent = () => {
        setIsHover(false);
    };
    useEffect(() => {
        node.current?.addEventListener("mouseover", handleMouseOverEvent);
        node.current?.addEventListener("mouseout", handleMouseOutEvent);
        return () => {
            node.current?.removeEventListener("mouseover", handleMouseOverEvent);
            node.current?.removeEventListener("mouseout", handleMouseOutEvent);
        }
    }, [node.current]);

    return [node, isHover];
}

export default useHover;