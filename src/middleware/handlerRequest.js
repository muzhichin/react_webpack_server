import axios from "axios";
// import http from "http";
// import https from "https";


const config = {
    method: 'post',
    responseType: 'json',
    withCredentials: true,
    // httpAgent: new http.Agent({keepAlive: true}),
    // httpsAgent: new https.Agent({keepAlive: true})
}

// const body = {
//     method: 'index',
//     params: {test: "test"},
// }

export default (url, method = "/", params = {t:"t"}) => axios.post(url, {method, params,}, config
).then(result => console.log(result)).catch((error) => console.log(error))