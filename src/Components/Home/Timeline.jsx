import TimeLineEvent from "./Molecules/TimeLineEvent";
import { timeLineArray } from '../../Data/Timeline';
import wStar from '../../assets/white-star.svg';
import gStar from '../../assets/grey-star.svg';
import star from '../../assets/sata gra.png';

const Timeline = () => {
  return (
    <section id="timeline" className="px-[5%] md:px-[7%] mx-auto flex flex-col justify-center items-center py-12 border-b border-b-slate-600 overflow-hidden">
      <h3 className="font-bold text-2xl mb-3">Timeline</h3>
      <p className="mb-16 w-7/12 md:w-4/12 text-center">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      <div className="flex flex-col gap-10 w-full mx-auto pt-0 md:pt-16 relative">
        <img src={star} className='absolute top-0 left-[20%]' alt="" />
        <img src={wStar} className='absolute top-1/2 right-[15%] w-5' alt="" />
        <img src={gStar} className='absolute bottom-16 left-20 w-5' alt="" />

        <div className='w-1 h-[calc(100%-24px)] bg-[#D434FE] absolute top-3 md:top-0 left-6 sm:left-1/2 rounded-xl -translate-x-1/2 -z-10' />
        {timeLineArray.map(({ title, desc, num, date, inverse }) => (
          <TimeLineEvent
            inverse={inverse}
            title={title}
            desc={desc}
            date={date}
            num={num}
            key={num}
          />
        ))}
      </div>
    </section>
  )
}

export default Timeline