const Api = axios.create({

    baseURL: 'https://www.breakingbadapi.com/api/',
    headers: {
        'Content-Type': 'application/json',
    }
});