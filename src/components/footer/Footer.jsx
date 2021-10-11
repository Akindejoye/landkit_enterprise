import Floor from './footer.module.css';

const Footer = () => {
    return ( 
        <div className={Floor.footerWrapper} style={{backgroundImage: `url('/images/footer-svg.svg')`}}>
            <div className={Floor.footerMargin}>
                <div className={Floor.footerBorder}></div>
                <div className={Floor.footerCentered}>
                    <div className={Floor.logoCol}>
                        <div className={Floor.logoBox}>
                            <h3 className={Floor.logo}>Landkit.</h3>
                        </div>
                        <p className={Floor.logoColText}>
                            A better way to<br /> build.
                        </p>
                        <div className={Floor.logoColSocial}>
                            <img src="/images/instagram.svg" alt="Instagram" className={Floor.logoColSocials} />
                            <img src="/images/facebook.svg" alt="Facebook" className={Floor.logoColSocials} />
                            <img src="/images/twitter.svg" alt="Twitter" className={Floor.logoColSocials} />
                            <img src="/images/pinterest.svg" alt="Pinterest" className={Floor.logoColSocials} />
                        </div>
                    </div>
                    <div className={Floor.productCol}>
                        <p className={Floor.productColHeader}>Product</p>
                        <ul className={Floor.productColList}>
                            <li className={Floor.productColItems}>Page Builder</li>
                            <li className={Floor.productColItems}>UI Kit</li>
                            <li className={Floor.productColItems}>Styleguide</li>
                            <li className={Floor.productColItems}>Documentation</li>
                            <li className={Floor.productColItems}>Changelog</li>
                        </ul>
                    </div>
                    <div className={Floor.servicesCol}>
                        <p className={Floor.servicesColHeader}>Services</p>
                        <ul className={Floor.servicesColList}>
                            <li className={Floor.servicesColItems}>Documentation</li>
                            <li className={Floor.servicesColItems}>Changelog</li>
                            <li className={Floor.servicesColItems}>Page Builder</li>
                            <li className={Floor.servicesColItems}>UI Kit</li>
                        </ul>
                    </div>
                    <div className={Floor.connectCol}>
                        <p className={Floor.connectColHeader}>Connect</p>
                        <ul className={Floor.connectColList}>
                            <li className={Floor.connectColItems}>Page Builder</li>
                            <li className={Floor.connectColItems}>UI Kit</li>
                            <li className={Floor.connectColItems}>Styleguide</li>
                            <li className={Floor.connectColItems}>Documentation</li>
                            <li className={Floor.connectColItems}>Changelog</li>
                            <li className={Floor.connectColItems}>Documentation</li>
                            <li className={Floor.connectColItems}>Changelog</li>
                        </ul>
                    </div>
                    <div className={Floor.legalCol}>
                        <p className={Floor.legalColHeader}>Legal</p>
                        <ul className={Floor.legalColList}>
                            <li className={Floor.legalColItems}>Documentation</li>
                            <li className={Floor.legalColItems}>Changelog</li>
                            <li className={Floor.legalColItems}>Page Builder</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;