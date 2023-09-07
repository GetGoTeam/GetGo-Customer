import axios from "axios";

const baseURL = "http://192.168.1.6";
const request = axios.create({ baseURL: `${baseURL}:3001/api/customers/` });

export { request, baseURL };
