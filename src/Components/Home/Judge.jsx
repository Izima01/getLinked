import Blur from "./Molecules/Blur"
import peeps from '../../assets/8046554 1.png';
import Attribute from './Molecules/Attribute';
import { attrArray } from "../../Data/Attributes";
import star from '../../assets/sata gra.png';
import wStar from '../../assets/white-star.svg';
import Button from "../Button";

const Judge = () => {
  return (
    <section className="px-[7%] mx-auto flex md:flex-row flex-col gap-10 w-full items-center py-16 border-b border-b-slate-600 relative overflow-hidden">
        <Blur top='-48%' right="-24%" width={640} />
        <Blur top='140px' left="-20px" width={640} />
        <Blur top='50%' right="-15%" width={580} />
        <img src={star} className="absolute top-10 left-[14%]" alt="" />
        <div className="flex-1 relative">
            <div className="hat w-32 h-32 rounded-full -z-10 absolute -top-8 left-[10%]" />
            <img src={peeps} alt="the big idea" className="w-11/12" />
            <img src={wStar} className="absolute bottom-0 right-6" alt="" />
        </div>
        <div className="flex-1 md:text-left text-center">
            <h4 className="text-3xl font-bold  leading-snug">Judging Criteria</h4>
            <h4 className="text-3xl font-bold text-[#d434fe] mb-4">Key attributes</h4>
            <div className="flex flex-col gap-4 mb-8">
                {attrArray.map(({ title, body }, i) => (
                    <Attribute title={title} key={i} body={body} />
                ))}
            </div>
            <Button classes='px-10'>Read More</Button>
        </div>
    </section>
  )
}

export default Judge