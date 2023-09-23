import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import close from '../assets/close.svg';

const MobileNavbar = ({ showNav, setShowNav }) => {
    const navigate = useNavigate();

    return (
        <section style={{ transform: `translateX(${showNav ? '0%': '-100%'})` }} className='bg-[rgba(255,255,255,0.05)] w-full fixed top-0 left-0 z-10 backdrop-blur-xl h-screen transition-all ease-in-out duration-500'>
            <aside className='sm:hidden flex flex-col gap-8 w-8/12 px-9 pt-12 pb-16 bg-[#150e28] h-screen'>
                <button className='ml-auto mb-5 relative border border-[#903AFF] rounded-full p-2' onClick={() => setShowNav(false)}>
                    <img src={close}  alt="" />
                </button>
                <NavLink to='/' className={({ isActive }) => `text-white ${isActive ? 'active' : ''}`}>Home</NavLink>
                <Link to='/#overview' className="text-white">Overview</Link>
                <Link to='/#faqs' className="text-white">FAQs</Link>
                <NavLink to='/contact' className={({ isActive }) => `text-white ${isActive ? 'active' : ''}`}>Contact</NavLink>
                <Button classes='mt-3' handleClick={() => navigate('/register')}>Register</Button>
            </aside>
        </section>
    )
}

export default MobileNavbar