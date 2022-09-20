import axios from "axios";
import { getToken } from "./Utils";

export const API = axios.create({
    baseURL: 'http://localhost:9090',
    headers:{
        Authorization : 'Bearer ' + getToken()
    }
});