import Cookies from 'js-cookie';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../../redux/authSlice';
import { Button, useSelect } from '@material-tailwind/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function Login({ children, ...props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/auth/google/login',
          { access_token: codeResponse.access_token }
        );
        // 저장한 access_token과 refresh_token을 쿠키에 설정
        // 만료 1시간
        Cookies.set('token', response.data.token, {
          expires: 1 / 24,
          secure: true,
          sameSite: 'Strict',
        });
        const token = Cookies.get('token');
        const decoded = jwtDecode(token);
        const userInfo = {
          email: decoded.email,
          name: decoded.name,
          id: decoded.id,
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        // 1시간으로 만료 시간 설정
        // Cookies.set('refresh_token', response.data.refresh_token, {
        //   expires: 1 / 24, // 1시간 후 만료
        //   secure: true,
        //   sameSite: 'Strict',
        // });

        dispatch(setToken(response.data.token));
        navigate(response.data.redirectUrl);
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  return (
    <Button onClick={() => login()} {...props}>
      {children}
    </Button>
  );
}
