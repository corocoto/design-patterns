import React, {useState, useEffect} from "react";

const withLoader = (Component, url) => {
    return props => {
        const [fetchedData, setFetchedData] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await fetch(url);
                const {message} = await response.json();
                setFetchedData(message);
            })();
        }, []);

        if (fetchedData) {
            return (
                <Component {...props} data={fetchedData}/>
            );
        }
        return <h1>Loading...</h1>;
    }
};

export default withLoader;