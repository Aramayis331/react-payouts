import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
	function (config) {
		console.log('Request was sent');
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);
axiosInstance.interceptors.response.use(
	function (response) {
		console.log('Response was received');

		return response;
	},
	function (error) {
		return Promise.reject(error);
	},
);

export default axiosInstance;
