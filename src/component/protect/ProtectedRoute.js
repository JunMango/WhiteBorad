import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import { setToken } from '../../redux/authSlice';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user); // Redux auth state

  useEffect(() => {
    const checkToken = async () => {
      const token = Cookies.get('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          // 만료되지 않은 경우 Redux 상태 업데이트
          if (decoded.exp * 1000 > Date.now()) {
            dispatch(setToken(token));
          } else {
            console.warn('jwt 만료');
          }
        } catch (error) {
          console.error('jwt decoding error:', error);
        }
      }
      setIsTokenChecked(true);
    };

    checkToken();
  }, [dispatch]);

  useEffect(() => {
    // 인증된 사용자가 '/'에 접근하는 것을 방지하고 사용자 페이지로 리디렉션
    if (isAuthenticated && location.pathname === '/' && user?.id) {
      navigate(`/user/${user.id}`, { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate, user]);

  if (!isTokenChecked) {
    return null; // 토큰 확인 중일 때는 아무것도 렌더링하지 않음
  }

  if (!isAuthenticated && location.pathname !== '/') {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default ProtectedRoute;
