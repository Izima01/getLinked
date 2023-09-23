import idea from '../../assets/the big idea 1.svg';
import star from '../../assets/sata gra.png';
import doodle from '../../assets/arrow.svg';

const Intro = () => {
  return (
    <section id="overview" className="px-[7%] mx-auto flex flex-col md:flex-row gap-10 items-center py-12 border-b border-b-slate-600">
        <div className="flex-1 relative">
            <p className="font-bold text-lg absolute text-center left-[41%] sm:left-1/2 md:-translate-x-1/2 top-[45%] md:top-[40%]">The Big <br/> Idea</p>
            <img src={star} className="absolute top-28 left-4 z-10" alt="star" />
            <img src={idea} alt="the big idea" className="mx-auto w-10/12 sm:w-3/4" />
            <img src={doodle} className='absolute sm:bottom-2 -bottom-6 -right-1 sm:right-2' alt="" />
        </div>
        <div className="flex-1 relative text-center md:text-left">
            <img src={star} className="absolute top-10 right-4 z-10" alt="star" />
            <h4 className="text-3xl font-bold  leading-snug">Introduction to getlinked</h4>
            <h4 className="text-3xl font-bold text-[#d434fe] mb-4">tech Hackathon 1.0</h4>
            <p className="">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you{"'"}re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&pos;s what we&pos;re all about!</p>

        </div>
    </section>
  )
}

export default Intro