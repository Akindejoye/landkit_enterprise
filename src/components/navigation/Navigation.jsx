import { useEffect, useState } from 'react';
import Navgate from './navigation.module.css';

const Navigation = () => {

    const [nav, setNav] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    return ( 
            <div className={Navgate.navMainBox}>
                <div className={Navgate.btnBox}>
                    <button 
                        className={Navgate.btn}
                        onClick={() => setNav(!nav)}>
                        <i className="btn-icon fas fa-bars"></i>
                    </button>
                </div>
                {(nav || screenWidth >= 600) && (
                    <div className={Navgate.navWrapper}>
                    <div className={Navgate.logoBox}>
                    <h3 className={Navgate.logo}>Landkit.</h3>
                    </div>
                    <div className={Navgate.navBox}>
                        <ul className={Navgate.nav}>
                            <li className={Navgate.navList}>Landings</li>
                            <li className={Navgate.navList}>Pages</li>
                            <li className={Navgate.navList}>Account</li>
                            <li className={Navgate.navList}>Documentation</li>
                        </ul>
                    </div>
                    <div className={Navgate.rightNav}>
                        <span className={Navgate.navList2}>Documentation</span>
                        <button className={Navgate.navBtn}>Buy now</button>
                    </div>
                </div>
                )}
                
            </div>
     );
}
 
export default Navigation;