import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearToken } from '../../../redux/authSlice';
import { PowerIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const confirmLogout = window.confirm('로그아웃을 하시겠습니까?');
    if (confirmLogout) {
      googleLogout();
      dispatch(clearToken());
      navigate('/');
      localStorage.removeItem('userInfo');
    }
  };
  // <PowerIcon className='h-5 w-5' />
  return <span onClick={handleLogout}>Logout</span>;
}
