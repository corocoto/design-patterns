import {useState, useCallback} from "react";

const withHover = Component => {
    return props => {
        const [isHover, setIsHover] = useState(false);

        const handleMouseEnterEvent = useCallback(() => {
            setIsHover(true);
        }, []);

        const handleMouseLeaveEvent = useCallback(() => {
            setIsHover(false);
        }, []);
        return (
            <Component
                {...props}
                hovering={isHover}
                onMouseEnter={handleMouseEnterEvent}
                onMouseLeave={handleMouseLeaveEvent}
            />
        )
    }
}

export default withHover;