import axiosWithCookie from './api';

export const createNote = async (noteTitle) => {
  try {
    const res = await axiosWithCookie.post('/api/note/new', noteTitle);
    console.log(res.status);
    if (res.status === 201) {
      alert('새로운 노트가 생성되었습니다.');
    }
  } catch (error) {
    console.error('createNote_에러야: ', error);
    throw error;
  }
};

export const getNoteList = async () => {
  try {
    const res = await axiosWithCookie.get('/api/note/list');
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error('getNoteList_에러야: ', error);
  }
};