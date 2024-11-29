import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
  Avatar,
} from '@material-tailwind/react';
import { UserPlusIcon } from '@heroicons/react/24/solid';

export function DialogCustomAnimation() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/*<Button onClick={handleOpen} variant='gradient'>*/}
      <Tooltip content='초대'>
        <UserPlusIcon
          onClick={handleOpen}
          className='h-6 w-6 text-gray-500 cursor-pointer'
        />
      </Tooltip>

      {/*</Button>*/}
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <DialogHeader>초대</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'>
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
