import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

export default function Login({ children, ...props }) {
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
    <Button onClick={() => login()} {...props}>
      {children}
    </Button>
  );
}
