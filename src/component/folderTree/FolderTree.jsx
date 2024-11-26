import { useState } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const data = {
  name: 'dbts',
  children: [
    {
      name: 'models',
      children: [
        { name: 'sa_use_deploys_rollup.sql' },
        { name: 'sa_renewals_rollup.sql' },
      ],
    },
    {
      name: 'snapshots',
      children: [
        { name: 'experiments_snapshot.sql' },
        { name: 'fct_expts_usabilla_snapshot.sql' },
      ],
    },
  ],
};

export default function UserSideBar() {
  const [open, setOpen] = useState(null);

  const handleToggle = (name) => {
    setOpen(open === name ? null : name);
  };

  return (
    <Card className='h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-gray-600'>
      <div className='mb-2 p-4'>
        <Typography variant='h5' color='blue-gray'>
          User Sidebar
        </Typography>
      </div>
      <List>
        {data.children.map((node) => (
          <Accordion
            key={node.name}
            open={open === node.name}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === node.name ? 'rotate-180' : ''
                }`}
              />
            }>
            <ListItem className='p-0'>
              <AccordionHeader
                onClick={() => handleToggle(node.name)}
                className='p-3'>
                <ListItemPrefix>
                  <ChevronDownIcon className='h-5 w-5' />
                </ListItemPrefix>
                <Typography color='blue-gray'>{node.name}</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className='py-1'>
              <List className='pl-6'>
                {node.children.map((child) => (
                  <ListItem key={child.name} className='p-1'>
                    <Typography color='blue-gray'>{child.name}</Typography>
                  </ListItem>
                ))}
              </List>
            </AccordionBody>
          </Accordion>
        ))}
      </List>
    </Card>
  );
}
