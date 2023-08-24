import axios from "axios";

const request = axios.create({ baseURL: "http://192.168.1.6:3001/api/customers/" });

export default request;
