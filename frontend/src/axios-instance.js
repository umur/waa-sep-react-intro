import axios from 'axios';
import { AppConstant } from './constants/AppConstant';

const instance = axios.create({
    baseURL: 'http://localhost:4040/',
    headers: { 'Authorization': 'Bearer ' + AppConstant.accessToken}
});
//instance.defaults.headers.common['Authorization'] = AppConstant.accessToken;

export default instance;