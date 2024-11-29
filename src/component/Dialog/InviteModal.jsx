import { useState, cloneElement } from 'react';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from '@material-tailwind/react';
import { UserGroupIcon } from '@heroicons/react/16/solid';
import { createGroup } from '../../utils/group';

export function InviteModal({ children }) {
  const [open, setOpen] = useState(false);
  const [isTitle, setIsTitle] = useState();
  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/* 외부에서 전달받은 버튼 */}
      {children && cloneElement(children, { onClick: handleOpen })}
      {/* 모달 */}
      <Dialog open={open} size='xs' handler={handleOpen}>
        <div className='flex items-center justify-between'>
          <DialogHeader className='flex flex-row items-start'>
            <UserGroupIcon className='h-8 w-8' />
            <Typography className='mb-1 ml-2' variant='h4'>
              그룹만들기
            </Typography>
          </DialogHeader>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='mr-3 h-5 w-5'
            onClick={handleOpen}>
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <DialogBody>
          {/*<Typography className='mb-10 -mt-7 ' color='gray' variant='lead'>*/}
          {/*  Write the message and then click button.*/}
          {/*</Typography>*/}
          <div className='grid gap-6'>
            <Typography className='-mb-1' color='blue-gray' variant='h6'>
              그룹 이름
            </Typography>
            <Input
              label='그룹이름'
              value={isTitle}
              onChange={(e) => setIsTitle(e.target.value)}
            />
            {/*<Textarea label='email' />*/}
          </div>
        </DialogBody>
        <DialogFooter className='space-x-2'>
          <Button variant='text' color='gray' onClick={handleOpen}>
            cancel
          </Button>
          <Button
            variant='gradient'
            color='gray'
            onClick={() => createGroup({ title: isTitle })}>
            생성
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
