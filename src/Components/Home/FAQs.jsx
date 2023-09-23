import ask from '../../assets/cwok_casual_21 1.png';
import Accordion from './Molecules/Accordion';
import { faqList } from '../../Data/FAQs';
import star from '../../assets/sata gra.png';
import gStar from '../../assets/grey-star.svg';
import wStar from '../../assets/white-star.svg';
import que from '../../assets/que.svg';

const FAQs = () => {
  return (
    <section id="faqs" className="px-[7%] mx-auto flex flex-col-reverse md:flex-row gap-10 w-full items-center py-20 border-b border-b-slate-600 relative overflow-hidden">
        <div className="w-full md:w-5/12 relative md:text-left text-center">
            <img src={star} className='absolute -top-8 -left-4' alt="" />
            <h4 className="text-3xl font-bold  leading-snug">Frequently Ask</h4>
            <h4 className="text-3xl font-bold text-[#d434fe] mb-3">Questions</h4>
            <p className="mb-8">We got answers to the questions that you might want to ask about <b>getlinked Hackathon 1.0</b></p>
            <div className='flex flex-col gap-4'>
                {faqList.map((item, i) => <Accordion key={i} title={item} />)}
            </div>
        </div>
        <div className="w-full md:w-7/12 relative">
            <img src={que} className='absolute -top-6 md:-top-1 left-[14%]' alt="" />
            <img src={que} className='absolute -top-14 md:-top-10 left-[30%]' alt="" />
            <img src={que} className='absolute -top-6 md:-top-1 left-[46%]' alt="" />

            <img src={star} className='absolute top-28 left-[15%]' alt="" />
            <img src={star} className='absolute -top-3 left-[38%]' alt="" />
            <img src={gStar} className='absolute top-64 left-[5%] w-5' alt="" />
            <img src={wStar} className='absolute bottom-0 right-[20%] w-4' alt="" />

            <img src={ask} alt="the big idea" className="w-11/12" />
        </div>
    </section>
  )
}

export default FAQs