import React, { useEffect } from 'react';

const useGet = (values) => {
    const { id, url, loadAgain } = values;
    const [data, setData] = React.useState(null);
    const URL = `${process.env.REACT_APP_SERVER_URL}${!id ? url : `${url}/${id}`}`;

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, [URL, loadAgain]);
    return data;
};

export default useGet;