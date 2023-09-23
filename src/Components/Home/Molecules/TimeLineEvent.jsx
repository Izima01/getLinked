import React from 'react';

const TimeLineEvent = ({ inverse, num, title, desc, date }) => {
  return (
    <>
      <div className={`w-full hidden sm:flex gap-0 md:gap-16 sm:gap-6 items-center justify-center ${inverse ? 'flex-row-reverse': 'flex-row'}`}>
          <div className={`w-4/12 flex flex-col ${inverse ? 'items-start' : 'items-end'}`}>
              <h5 className={`text-[#d434fe] text-xl font-semibold mb-1 ${inverse ? 'text-start' : 'text-end'}`}>{title}</h5>
              <p className={inverse ? 'text-start w-full' : 'text-end w-full'}>{desc}</p>
          </div>
          <div className='number border-8 w-12 h-12 border-black rounded-full flex items-center justify-center'>
            {num}
          </div>
          <h5 className={`text-[#d434fe] text-xl font-semibold w-4/12 ${inverse ? 'text-end' : ''}`}>{date}</h5>
      </div>

      <div className={`w-full flex items-end sm:hidden gap-3`}>
          <div className='number border-8 w-12 h-12 border-black rounded-full flex items-center justify-center'>
            {num}
          </div>
          <div className='w-10/12'>
            <h5 className={`text-[#d434fe] text-xl font-semibold mb-2 `}>{title}</h5>
            <p>{desc}</p>
            <h5 className={`text-[#d434fe] text-xl font-semibold`}>{date}</h5>
          </div>
      </div>
    </>

  )
}

export default TimeLineEvent