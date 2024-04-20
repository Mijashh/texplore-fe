const useFetch = async (url, options) => {
    const response = await fetch(url, options);
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        return Promise.resolve(data);
    } else {
        const errorData = await response.json();
       return Promise.reject(errorData);
    }
};

export default useFetch;
