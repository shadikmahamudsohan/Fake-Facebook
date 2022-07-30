const UsePost = (values, data) => {
    const { id, url } = values;
    console.log(data);
    const URL = `${process.env.REACT_APP_SERVER_URL}${!id ? url : `${url}/${id}`}`;
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
};

export default UsePost;