
/* function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export {parseJwt}; */

import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/eccomerce/token/'

const login = async credentials => {
    const {data} = await axios.post(baseUrl, credentials)
    return data
}

export default { login }