import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TERipple } from 'tw-elements-react';

export default function Login() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  // 초기 로드 시 로컬 스토리지 확인
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('token'));
    const storedProfile = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedProfile) {
      setUser(storedUser);
      setProfile(storedProfile);
      setIsLogin(true);
      navigate(`/user/${storedProfile.id}`);
    }
  }, [navigate]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      setIsLogin(true);
      localStorage.setItem('token', JSON.stringify(codeResponse));
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          localStorage.setItem('user', JSON.stringify(res.data));
          navigate(`/user/${res.data.id}`);
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setIsLogin(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <div>
      <TERipple rippleColor='light' className='w-full'>
        <button
          className='mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
          style={{ backgroundColor: '#a40f16' }}
          onClick={() => login()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-2 h-6 w-6 text-white'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='currentColor'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'>
            fill='currentColor' viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <path d='M17.788 5.108A9 9 0 1021 12h-8' />
          </svg>
          Google Login
        </button>
      </TERipple>
    </div>
  );
}
