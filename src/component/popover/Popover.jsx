import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from '@material-tailwind/react';

export default function PopoverDefault() {
  return (
    <Popover placement='bottom'>
      <PopoverHandler>
        <Button>share</Button>
      </PopoverHandler>
      <PopoverContent>
        This is a very beautiful popover, show some love.
      </PopoverContent>
    </Popover>
  );
}
