import MainLayout from '../layout/main/MainLayout';
import User from '../component/user/User';
import UserSideBar from '../component/userSideBar/userSideBar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StickyNavbar } from '../component/Nav/StickyNavbar';

export default function UserPage({ setIsLogin, setProfile }) {
  const navigate = useNavigate();
  // const token = useSelector((state) => state.auth.token);
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // console.log('Token:', token);
  // console.log('Is Authenticated:', isAuthenticated);

  return (
    <MainLayout
      sidebar={<UserSideBar setIsLogin={setIsLogin} setProfile={setProfile} />}>
      <User setIsLogin={setIsLogin} setProfile={setProfile} />
    </MainLayout>
  );
}
