import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from '@material-tailwind/react';

import { useState } from 'react';
import { createNote } from '../../utils/note';

export default function NewPostCardBoard(props) {
  const [isTitle, setIsTitle] = useState();

  return (
    <Card className='mt-6 w-80 flex flex-col'>
      <CardHeader className='relative h-10' floated={false} shadow={false}>
        <Typography
          variant='h5'
          color='blue-gray'
          className='mb-2 mt-4 text-center'>
          새 노트 생성
        </Typography>
      </CardHeader>
      <CardBody className='flex-grow'>
        <div className='flex flex-col gap-6'>
          {/*<Input*/}
          {/*  value={isTitle}*/}
          {/*  label='노트제목'*/}
          {/*  onChange={(e) => setIsTitle(e.target.value)}*/}
          {/*/>*/}
          <Input
            variant='static'
            label='Title'
            placeholder='title'
            value={isTitle}
            onchange={(e) => setIsTitle(e.target.value)}
          />
          <div></div>
        </div>
      </CardBody>
      <CardFooter className='mt-auto p-4'>
        <Button
          className='w-full bg-green-400'
          onClick={() => createNote({ title: isTitle })}>
          생성
        </Button>
      </CardFooter>
    </Card>
  );
}
