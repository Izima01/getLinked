import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/getlinked.svg';
import ham from '../assets/ham.svg';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Header = ({ setShowNav }) => {
  const navigate = useNavigate();

  return (
    <header className="px-[7%] sm:px-[5%] lg:px-[7%] flex justify-between py-4 border-b border-b-slate-400">
        <img src={logo} className='lg:w-auto w-36' alt="" />
        <nav className='hidden sm:flex justify-between sm:justify-normal gap-4 md:gap-6 lg:gap-10 items-center'>
          <NavLink to='/' className={({ isActive }) => `text-white ${isActive ? 'active' : ''}`}>Home</NavLink>
          <Link to='/#overview' className="text-white">Overview</Link>
          <Link to='/#faqs' className="text-white">FAQs</Link>
          <NavLink to='/contact' className={({ isActive }) => `text-white ${isActive ? 'active' : ''}`}>Contact</NavLink>
          <Button classes='ml-2 lg:ml-8 px-10' handleClick={() => navigate('/register')}>Register</Button>
        </nav>
  
        <button className='sm:hidden block' onClick={() => setShowNav(prev => !prev)}>
          <img src={ham} alt="" />
        </button>
    </header>
  )
}

export default Header