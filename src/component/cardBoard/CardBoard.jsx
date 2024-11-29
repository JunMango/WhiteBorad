import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Avatar,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import PopoverDefault from '../popover/Popover';
import { DialogCustomAnimation } from '../Dialog/Dialog';

export default function CardBoard(props) {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const { title, createdAt, _id } = props.note;
  const dateOnly = createdAt.split('T')[0];

  const handleCardClick = () => {
    navigate(`/user/note/${_id}`); // 경로 변경
  };
  return (
    <>
      <Card className='mt-6 w-80 overflow-hidden cursor-pointer'>
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          className='m-0 rounded-none'
          onClick={() => handleCardClick()}>
          <img
            src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
            alt='ui/ux review check'
          />
        </CardHeader>
        <CardBody className='flex justify-between'>
          <Typography variant='h5' color='blue-gray'>
            {title}
          </Typography>
          <DialogCustomAnimation />
          {/*<PopoverDefault />*/}
        </CardBody>
        <CardFooter className='flex items-center justify-between'>
          <div className='flex items-center -space-x-3'>
            <Tooltip content='Natali Craig'>
              <Avatar
                size='sm'
                variant='circular'
                alt='natali craig'
                src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80'
                className='border-2 border-white hover:z-10'
              />
            </Tooltip>
            <Tooltip content='Tania Andrew'>
              <Avatar
                size='sm'
                variant='circular'
                alt='tania andrew'
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                className='border-2 border-white hover:z-10'
              />
            </Tooltip>
            <Tooltip content='Tania Andrew'>
              <Avatar
                size='sm'
                variant='circular'
                alt='tania andrew'
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                className='border-2 border-white hover:z-10'
              />
            </Tooltip>
          </div>
          {/* createdAt 바인딩 */}
          <Typography className='font-normal'>{dateOnly}</Typography>
        </CardFooter>
      </Card>
    </>
  );
}
