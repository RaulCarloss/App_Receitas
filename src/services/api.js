// json-server -–W -d 180 -–H 192.168.0.197 db.json => rodar json sever

import axios from "axios";

const api = axios.create({
    baseURL: ' http://192.168.0.197:3000'
})

export default api;
