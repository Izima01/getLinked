import { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from './Components/Header';
import MobileNavbar from './Components/MobileNavbar';

const SharedLayout = () => {
    const [showNav, setShowNav] = useState(false);
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        setShowNav(false);
        if (hash == '') return window.scrollTo(0,0);
        
        setTimeout(() => {
            const id = hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
            el.scrollIntoView();
            }
        }, 0);
    }, [pathname, hash, key]);

  return (
    <>
      <Header setShowNav={setShowNav} />
      <Outlet />
      <MobileNavbar showNav={showNav} setShowNav={setShowNav} />
    </>
  )
}

export default SharedLayout