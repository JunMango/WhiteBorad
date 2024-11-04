import NotePage from './page/NotePage';
import LoginPage from './page/LoginPage';
import { Route, Routes } from 'react-router-dom';
import UserPage from './page/UserPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/user/:id' element={<UserPage />} />
      <Route path='/note' element={<NotePage />} />
    </Routes>
  );
}
