import Button from '../Button';
import lock from '../../assets/08 1.png';
import secure from '../../assets/lock.svg';

const Privacy = () => {
  return (
    <section id="privacy" className="px-[7%] mx-auto flex flex-col md:flex-row gap-7 w-full items-end py-12 border-b border-b-slate-600 relative overflow-hidden">
        <div className='md:w-7/12 text-center md:text-left'>
            <h4 className="text-2xl font-bold  leading-snug">Privacy Policy and</h4>
            <h4 className="text-2xl font-bold text-[#d434fe] mb-3">Terms</h4>
            <p className='py-3'>Last updated on September 12 2023</p>
            <p>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
            
            <div className="border border-[#D434FE] px-[7%] md:px-[10%] py-12 mt-12 text-left">
                <p className='text-center leading-relaxed'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                <h5 className='text-[#d434fe] mt-4 text-lg font-semibold'>Licensing policy</h5>
                <p>Here are terms of our Standard License:</p>
                <ul className='policy mt-5 px-4 w-full'>
                    <li className=''>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
                    <li className=''>You are licensed to use the item available at any free source sites, for your project developement</li>
                </ul>
                <Button>Read More</Button>
            </div>
        </div>

        <div className='md:w-5/12 relative md:mt-0 mt-20'>
            <img src={secure} className='absolute left-1/2 w-7/12 -z-10 -translate-x-1/2 -top-20 md:-top-40' alt="" />
            <img src={lock} className='w-3/4 md:w-full mx-auto' alt="" />
        </div>
    </section>
  )
}

export default Privacy