import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '../auth/logout/Logout';

export default function User({ setIsLogin, setProfile }) {
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('user'));

    if (!storedProfile) {
      navigate('/'); // 로그인되어 있지 않으면 로그인 페이지
    }
  }, [navigate]);

  return (
    <div>
      <h2>User Page</h2>
      <Logout setIsLogin={setIsLogin} setProfile={setProfile} />
    </div>
  );
}
