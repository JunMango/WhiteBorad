import NotePage from './page/NotePage';
import LoginPage from './page/LoginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserPage from './page/UserPage';
import ProtectedRoute from './component/protect/ProtectedRoute';
import ErrorPage from './page/ErrorPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route
        path='/user/:id'
        element={
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        }
      />
      <Route path='/user/note/:id' element={<NotePage />} />
      <Route path='/error' element={<ErrorPage />} />
      {/* Catch-all route for non-existent URLs */}
      {/*<Route path='*' element={<Navigate to='/error' replace />} />*/}
    </Routes>
  );
}
