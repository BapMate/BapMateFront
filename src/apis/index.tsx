import axios from 'axios';
import { usePostRefreshToken } from './post/usePostRefreshToken';

const BASE_URL = 'http://52.79.201.97:8080/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터
axiosInstance.interceptors.response.use((response) => {
  //응답데이터 콘솔찍기
  console.log(response);

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (response && response.status === 403) {
    //accessToken없음
    console.log('Error: accessToken없음');
  }

  if (response && response.status === 401) {
    //accessToken만료
    const fetchRefreshData = usePostRefreshToken(refreshToken);
    console.log('Error: accessToken없음');

    // refreshToken으로 갱신
    fetchRefreshData.refreshToken();
    if (fetchRefreshData.isSuccess) {
      console.log('accessToken 갱신');
      console.log(fetchRefreshData.data.data);
    }
  }

  return response;
});

export default axiosInstance;
