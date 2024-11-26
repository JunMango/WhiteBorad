import Cookies from 'js-cookie';
import axios from 'axios';

/**
 * @description Axios 인스턴스를 생성
 * 목적 : axios 요청 시 header에 token을 보내기 위함
 */

const axiosWithCookie = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // 서버 포트 ex) http://localhost:8080
});

axiosWithCookie.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('token');
    if (!accessToken) {
      // 토큰이 없으면 '/'로 강제 이동
      window.location.href = '/';
      return Promise.reject(new Error('No token provided'));
    } else {
      // 토큰이 있는 경우 Authorization 헤더에 추가
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // 요청 에러 직전 호출됩니다.
    // console.log(error);
    window.location.href = '/error';
    return Promise.reject(error);
  }
);

export default axiosWithCookie;
