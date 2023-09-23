import React from 'react'
import silver from '../../../assets/silver_medal 1.png';
import gold from '../../../assets/gold_medal 1.png';
import bronze from '../../../assets/bronze_medal 1.png';

const MedalBox = ({ type }) => {
  return (
    <article className={`border border-[#903AFF] rounded-lg bg-[#903aff1e] px-3 pb-4 ${type=='gold' ? 'pt-20' : 'pt-12'} flex flex-col items-center relative h-fit`}>
        <img src={type == 'gold' ? gold : type=='silver' ? silver : bronze} alt="" className={`absolute ${type == 'gold' ? 'scale-125' : 'scale-100'} -top-20`} />
        <h2 className='text-2xl font-bold mt-2'>
            {type == 'gold' ? '1st' : type=='silver' ? '2nd' : '3rd'}
        </h2>
        <h4 className='text-lg font-medium'>Runner</h4>
        <h4 className='text-[#d434fe] text-2xl font-bold'>
            
            {type == 'gold' ? 'N400,000' : type=='silver' ? 'N300,000' : 'N150,000'}
        </h4>
    </article>
  )
}

export default MedalBox