import Note from './page/Note';
import Login from './page/Login';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/note' element={<Note />} />
    </Routes>
  );
}
