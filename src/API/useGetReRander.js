import React, { useEffect } from 'react';

const useGetRerender = (values) => {
    const { id, url } = values;
    const [data, setData] = React.useState(null);
    const URL = `${process.env.REACT_APP_SERVER_URL}${!id ? url : `${url}/${id}`}`;
    useEffect(() => {
        const interval = setInterval(() => {
            fetch(URL)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err));
        }, 1000);
        return () => clearInterval(interval);

    }, [URL]);
    return data;
};

export default useGetRerender;