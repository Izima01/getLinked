import man from '../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png';
import globe from '../../assets/globe.png';
import curve from '../../assets/curve.svg';
import Blur from '../../Components/Home/Molecules/Blur';
import Button from '../Button';
import wStar from '../../assets/white-star.svg';
import gStar from '../../assets/grey-star.svg';
import chain from '../../assets/chain.svg';
import bulb from '../../assets/bulb.svg';
import bang from '../../assets/bang.svg';

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col items-center gap-6 md:gap-0 pt-6 md:pt-10 px-[5%] sm:px-[7%] justify-between relative border-b border-b-slate-600 overflow-x-hidden overflow-y-hidden">
        <Blur top="-100px" left="5%" />
        <img src={wStar} className='absolute  sm:top-8  sm:left-[10%] w-6 h-8' alt="" />
        <img src={gStar} className='absolute  sm:top-20  sm:left-[60%] w-6 h-8' alt="" />
        <img src={gStar} className='absolute  sm:bottom-20  sm:left-[30%] w-6 h-8' alt="" />
        <div className='w-full md:w-1/2 lg:w-5/12 text-center md:text-left'>
            <h2 className='text-lg sm:text-2xl font-bold text-white mb-4 md:mb-0 mx-auto ignite relative -mt-2 md:hidden block'>
                Igniting a Revolution in HR Innovation
                <img src={curve} alt="" className='absolute right-8 -bottom-4 md:hidden block' />
            </h2>
            <h1 className="text-4xl font-bold mb-2 leading-snug mt-12 md:mt-0 bulb relative">
                getlinked Tech <br />
                Hackathon <span className="text-[#D434FE]">1.0</span>
                <img src={chain} className='inline w-14 ml-2' alt="" />
                <img src={bang} className='inline w-9 ml-2' alt="" />
            </h1>
            <p className="text-lg mb-8 px-8 md:px-0 md:w-8/12">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
            <Button classes='mb-8 md:mb-12 px-10'>Register</Button>
            <div className="flex gap-5 justify-center md:justify-normal items-end">
                <h3 className='text-4xl md:text-2xl'>00<span className="text-xs">H</span></h3>
                <h3 className='text-4xl md:text-2xl'>00<span className="text-xs">M</span></h3>
                <h3 className='text-4xl md:text-2xl'>00<span className="text-xs">S</span></h3>
            </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-7/12 relative flex flex-col items-end'>
            <div className='relative mx-auto mb-4'>
            <h2 className='text-2xl font-bold text-white mx-auto ignite hidden md:block'>Igniting a Revolution in HR Innovation</h2>
            <img src={curve} alt="" className='absolute right-0 -bottom-4 hidden md:block' />
            </div>
            <Blur top="" left="15%" width={500} z={1} />
            <img src={man} className='w-[480px]' alt="" />
            <img src={globe} className='absolute w-[400px] left-[45%] top-[60%] -translate-x-1/2 -translate-y-1/2' alt="" />
        </div>
    </section>
  )
}

export default Hero