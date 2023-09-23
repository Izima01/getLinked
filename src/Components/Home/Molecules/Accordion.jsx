import React, { useState } from 'react'

const Accordion = ({ title }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prev => !prev);
    };
  return (
    <details className='pb-2 border-b border-b-[#D434FE] flex justify-between w-full transition duration-500 relative' open={toggle}>
        <summary className='flex justify-between items-center font-medium'>
            {title}
            <button className='text-[#d434fe] text-xl' onClick={handleToggle}>+</button>
        </summary>
        <p className='text-sm ml-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, sunt repellat quaerat quidem officia iste consectetur. Consequuntur nulla eligendi quos.</p>
    </details>
  )
}

export default Accordion