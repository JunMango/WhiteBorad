import { useEffect, useState } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';

import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import {
  BellIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/16/solid';
import { InviteModal } from '../Dialog/InviteModal';
import { getGroupList } from '../../utils/group';

export default function UserSideBar({ setIsLogin, setProfile }) {
  const [open, setOpen] = useState(0);
  const [isGroupList, setIsGroupList] = useState([]);
  const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();
  useEffect(() => {
    getGroupList().then((res) => {
      if (res && Array.isArray(res)) {
        setIsGroupList(res);
      } else {
        setIsGroupList([]);
      }
    });
  }, [open]);
  const handleOpen = (value) => {
    const newOpen = open === value ? 0 : value;
    setOpen(newOpen);
  };

  return (
    <Card className='h-[80vh] p-1  shadow-gray-600'>
      <div className='mb-2 p-4'>
        <Typography variant='h5' color='blue-gray'>
          Hello {user.name}
        </Typography>
      </div>
      <List>
        <ListItem disabled={true} className='text-balance'>
          <ListItemPrefix>
            <UserCircleIcon className='h-8 w-8 text-blue-900' />
          </ListItemPrefix>
          <span className='text-black'>{user.email}</span>
        </ListItem>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? 'rotate-180' : ''}`}
            />
          }>
          <ListItem className='p-0' selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className='border-b-0 p-3'>
              <ListItemPrefix>
                <BellIcon className='h-5 w-5' />
              </ListItemPrefix>
              <Typography color='blue-gray' className='mr-auto font-normal'>
                나의 초대
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className='py-1'>
            <List className='p-0'>
              <ListItem>
                <ListItemPrefix>
                  {/*<ChevronRightIcon strokeWidth={3} className='h-3 w-5' />*/}
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  {/*<ChevronRightIcon strokeWidth={3} className='h-3 w-5' />*/}
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  {/*<ChevronRightIcon strokeWidth={3} className='h-3 w-5' />*/}
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? 'rotate-180' : ''}`}
            />
          }>
          <ListItem className='p-0' selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className='border-b-0 p-3'>
              <ListItemPrefix>
                <UserGroupIcon className='h-5 w-5' />
              </ListItemPrefix>
              <Typography color='blue-gray' className='mr-auto font-normal'>
                나의 그룹
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className='py-1'>
            <List className='p-0'>
              <InviteModal>
                <ListItem>
                  <ListItemPrefix>
                    <PlusCircleIcon className='h-4 w-4 text-green-500' />
                  </ListItemPrefix>
                  그룹만들기
                </ListItem>
              </InviteModal>
              {isGroupList.map((index) => (
                <ListItem key={index}>
                  <ListItemPrefix>
                    <ChevronRightIcon className='h-3 w-5' />
                  </ListItemPrefix>
                  {index.title}
                </ListItem>
              ))}
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className='h-5 w-5' />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value='14'
              size='sm'
              variant='ghost'
              color='blue-gray'
              className='rounded-full'
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className='h-5 w-5' />
          </ListItemPrefix>
          Settings
        </ListItem>
      </List>
    </Card>
  );
}
