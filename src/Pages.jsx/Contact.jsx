import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg';
import {Link} from 'react-router-dom'
import ContactBox from "../Components/ContactBox";

const Contact = () => {
    return (
        <main className="px-[8%] w-full flex md:flex-row flex-col gap-8 md:gap-0 justify-between my-14 md:my-28 items-center">
            <div className="flex flex-col gap-3 sm:gap-4 w-full md:w-4/12">
                <h1 className="text-3xl text-[#d434fe] font-semibold">Get in touch</h1>
                <p className="sm:text-lg">Contact Information</p>
                <p className="sm:text-lg">7,Alara Street Yaba 100012 Lagos State</p>
                <p className="sm:text-lg">Call Us : 07067981819</p>
                <p className="sm:text-lg">We are open from Monday-Friday 08:00am - 05:00pm</p>
                <h5 className='text-[#d434fe] font-semibold text-lg'>Share on</h5>
                <div className="flex gap-4 items-center">
                    <Link href="/"><img src={instagram} alt="" /></Link>
                    <Link href="/"><img src={twitter} alt="" /></Link>
                    <Link href="/"><img src={facebook} alt="" /></Link>
                    <Link href="/"><img src={linkedin} alt="" /></Link>
                </div>
            </div>
            <ContactBox />
        </main>
    )
}

export default Contact