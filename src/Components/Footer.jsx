import logo from '../assets/getlinked.svg';
import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg';
import phone from '../assets/phone.svg';
import location from '../assets/location.svg';

const Footer = () => {
  return (
    <footer className="px-[8%] sm:px-[4%] md:px-[8%] mx-auto w-full items-end pt-16 pb-10 relative overflow-hidden">
        <section className="flex flex-col md:flex-row gap-8 sm:gap-4 lg:gap-8 sm:flex-row md:gap-[10%]">
            <div className=''>
                <img src={logo} alt="" />
                <p className='text-sm lg:w-[420px] mt-2'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                <p className='mt-8 sm:mt-16'>Terms of Use <span className='text-[#d434fe]'>|</span> Privacy Policy</p>
            </div>

            <div className='flex flex-col gap-2 sm:gap-4 flex-shrink-0'>
                <h4 className='text-[#d434fe] font-semibold'>Useful links</h4>
                <Link href="/#overview" className='text-sm'>Overview</Link>
                <Link href="/#timeline" className='text-sm'>Timeline</Link>
                <Link href="/#faqs" className='text-sm'>FAQs</Link>
                <Link href="/register" className='text-sm'>Register</Link>
                <h5 className='text-sm flex gap-3 items-center'>
                    <span className='text-[#d434fe] font-semibold'>Follow us</span>
                    <Link href="/"><img src={instagram} alt="" /></Link>
                    <Link href="/"><img src={twitter} alt="" /></Link>
                    <Link href="/"><img src={facebook} alt="" /></Link>
                    <Link href="/"><img src={linkedin} alt="" /></Link>
                </h5>
            </div>

            <div className='flex flex-col gap-4 '>
                <h4 className='text-[#d434fe] font-semibold'>Contact Us</h4>
                <Link to='/' className='flex gap-4 items-start'>
                    <img src={phone} className='w-3.5' alt="" />
                    <p className='text-sm leading-none'>+234 679 81819</p>
                </Link>

                <Link to='/' className='flex gap-4 items-start'>
                    <img className='w-3.5' src={location} alt="" />
                    <p className='text-sm w-32'>27,Alara Street Yaba 100012 Lagos State</p>
                </Link>
            </div>
        </section>
        <p className='mx-auto text-center mt-12 text-sm'>All rights reserved. © getlinked Ltd.</p>
    </footer>
  )
}

export default Footer