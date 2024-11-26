import { useEffect, useState } from 'react';
import CardBoard from '../cardBoard/CardBoard';
import NewPostCardBoard from '../cardBoard/NewPostCardBoard';
import { getNoteList } from '../../utils/note';

export default function User({ setIsLogin, setProfile }) {
  const [isNoteList, setIsNoteList] = useState([]);
  useEffect(() => {
    getNoteList().then((res) => {
      if (res && res.notes) {
        setIsNoteList(res.notes); // notes 배열만 설정
      } else {
        setIsNoteList([]); // notes가 없으면 빈 배열 설정
      }
    });
  }, [isNoteList]);
  return (
    <>
      <div className='grid grid-cols-4 grid-flow-row gap-3'>
        <NewPostCardBoard />
        {isNoteList.map((note, index) => (
          <CardBoard key={index} note={note} />
        ))}
      </div>
    </>
  );
}
