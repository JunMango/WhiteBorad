import MainLayout from '../layout/main/MainLayout';
import User from '../component/user/User';
import UserSideBar from '../component/userSideBar/userSideBar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserPage({ setIsLogin, setProfile }) {
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('user'));

    if (!storedProfile) {
      navigate('/'); // 로그인되어 있지 않으면 로그인 페이지
    }
  }, [navigate]);

  return (
    <MainLayout
      sidebar={<UserSideBar setIsLogin={setIsLogin} setProfile={setProfile} />}>
      <User setIsLogin={setIsLogin} setProfile={setProfile} />
    </MainLayout>
  );
}
