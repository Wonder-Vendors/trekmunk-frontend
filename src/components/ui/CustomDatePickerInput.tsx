"use client"
import React, { ChangeEventHandler, useRef, useState } from 'react';

import { format, isValid, parse,toDate } from 'date-fns';
// import FocusTrap from 'focus-trap-react';
import { DayPicker, DayPickerDefaultProps, SelectSingleEventHandler } from 'react-day-picker';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Input } from './input';
// import { usePopper } from 'react-popper';


const classNames: DayPickerDefaultProps['classNames'] = {
    caption:"flex justify-around items-center h-10 relative",
    table:"w-full",
    cell:"px-2 align-middle text-center",
    caption_label:"hidden",
    dropdown_month:"",
    // dropdown_year:"w-16 ",
    dropdown:"w-[90px] cursor-pointer",
    dropdown_icon:"",
    caption_dropdowns:"flex flex-row z-[101]",
    vhidden:"hidden",
    tbody:"",
    day:"m-auto rounded-full w-full transition-colors hover:bg-sky-100 focus:outline-none focus-visible:ring focus-visible:ring-sky-300 focus-visible:ring-opacity-50 active:bg-sky-600 active:text-white text-sm",
    nav_icon:"w-3 h-3",
    nav_button:
      'w-4 h-4 rounded-full text-gray-600 hover:bg-gray-100',
    nav_button_next: 'right-0',
    nav_button_previous: 'left-0',
    day_selected: 'text-white bg-sky-500 hover:bg-sky-500',
    day_today: 'font-bold',
    day_disabled:
      'opacity-25 hover:bg-white active:bg-white active:text-gray-800',
    day_outside: 'enabled:opacity-50',
    // day_range_middle: 'rounded-none',
    // day_range_end: 'rounded-l-none rounded-r-full',
    // day_range_start: 'rounded-r-none rounded-l-full',
    // day_hidden: 'hidden',
  };



export default function CustomDatePickerInput() {
  const [selected, setSelected] = useState<Date>();
  const [inputValue, setInputValue] = useState<string>('');


//   const popper = usePopper(popperRef.current, popperElement, {
//     placement: 'bottom-start'
//   });



  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
    const date = parse(e.currentTarget.value, 'y-MM-dd', new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleButtonClick = () => {
    // setIsPopperOpen(true);
  };

  const handleDaySelect: SelectSingleEventHandler = (date) => {
    setSelected(date);
    if (date) {
      setInputValue(format(date, 'y-MM-dd'));
    //   closePopper();
    } else {
      setInputValue('');
    }
  };

  return (
    <div className='border border-gray-500 w-full h-full'>
        {/* <Popover> */}
            {/* <PopoverTrigger className='w-full h-full flex items-center' asChild> */}
    <Input type="date" max={new Date().toISOString().split('T')[0]} className='cursor-pointer'/>
            {/* </PopoverTrigger> */}
            {/* <PopoverContent className='z-[100] flex  flex-col'>
                <div className="w-full">
                    <DayPicker mode='single' className='w-full'
                    captionLayout="dropdown"
                    fromYear={1920}
                    toDate={new Date()}
                    today={new Date()}
                    selected={selected}
                    onSelect={setSelected}
                    classNames={classNames}
                     />
                </div>
            </PopoverContent>
        </Popover> */}
    </div>
  );
}