import Navgate from './navigation.module.css';

const Navigation = () => {
    return ( 
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
                    <span className={`${Navgate.navList} ${Navgate.navList2}`}>Documentation</span>
                    <button className={Navgate.navBtn}>Buy now</button>
                </div>
            </div>
     );
}
 
export default Navigation;