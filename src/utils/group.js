import axiosWithCookie from './api';

export const createGroup = async (groupTitle) => {
  console.log('그룹 제목 ', groupTitle);
  try {
    const res = await axiosWithCookie.post('/api/group/new', groupTitle);
    if (res.status === 201) {
      alert('새로운 그룹이 생성되었습니다.');
    }
  } catch (error) {
    console.error('createGroup_에러야: ', error);
    throw error;
  }
};
export const getGroupList = async () => {
  try {
    const res = await axiosWithCookie.get('/api/group/list');
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error('getGroupList_에러야: ', error);
  }
};
