import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};
const axiosInstance = axios.create({
  baseURL:
    'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros',
  headers: headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers['authorId'] = 2;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
