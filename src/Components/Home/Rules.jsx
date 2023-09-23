import girl from '../../assets/7450159 1.png';
import Blur from './Molecules/Blur';
import gStar from '../../assets/grey-star.svg';
import wStar from '../../assets/white-star.svg';

const Rules = () => {
  return (
    <section id="rules" className="px-[7%] mx-auto flex md:flex-row flex-col-reverse py-8 gap-10 w-full items-center border-b border-b-slate-600 relative overflow-x-hidden overflow-y-clip">
        <Blur top='-50px' left='10px' width={640} />
        <Blur bottom='-45%' right='-24%' width={640} z={2} />
        <div className="flex-1 relative md:text-left text-center">
            <img src={gStar} className='absolute -top-2 left-1/2' alt="" />
            <img src={wStar} className='absolute -bottom-10 -right-4' alt="" />
            <h4 className="text-3xl font-bold  leading-snug">Rules and </h4>
            <h4 className="text-3xl font-bold text-[#d434fe] mb-4">Guidelines</h4>
            <p className="">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
        </div>
        <div className="flex-1 overflow-y-hidden">
          <img src={girl} alt="the big idea" className="" />
        </div>
    </section>
  )
}

export default Rules