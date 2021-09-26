import axios from 'axios';

const baseURL = 'https://api.github.com/';

const instance = axios.create({
	baseURL: `${baseURL}`,
});

export { baseURL };

export default instance;
