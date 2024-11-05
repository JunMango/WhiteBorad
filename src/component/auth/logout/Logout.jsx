import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

export default function Logout({ setIsLogin, setProfile }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('로그아웃을 하시겠습니까?');
    if (confirmLogout) {
      googleLogout();
      if (setIsLogin) setIsLogin(false);
      if (setProfile) setProfile(null);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/'); // 로그아웃 후 홈 페이지로 이동
    }
  };

  return <span onClick={handleLogout}>Logout</span>;
}
