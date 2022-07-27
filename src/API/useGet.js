import React, { useEffect } from 'react';

const useGet = (values) => {
    const { id, url } = values;
    const [data, setData] = React.useState(null);
    const URL = `http://localhost:5000/${!id ? url : `${url}/${id}`}`;
    useEffect(() => {
        const interval = setInterval(() => {
            // console.log('This will run every second!');
            fetch(URL)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err));
        }, 1000);
        return () => clearInterval(interval);

    }, [URL]);
    return data;
};

export default useGet;