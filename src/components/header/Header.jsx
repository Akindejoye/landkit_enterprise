import Heading from './header.module.css';

const Header = () => {
    return ( 
        <div className={Heading.headerWrapper} style={{background:`url("/images/header-background.svg")`}}>
            <div className={Heading.texBox}>
                <h1 className={Heading.headerTextL}>
                    Funding Made Simple
                </h1>
                <p className={Heading.headerTextSm}>
                    Forward-thinking businesses use Timekit to imagine,<br/>
                    design and manage the perfect scheduling flows.
                </p>
                <div className={Heading.btnBox}>
                    <button className={Heading.headerBtn}>Apply in 5 minutes</button>
                </div>
                <div className={Heading.downPagebox}>
                    <i className="arrow-down fas fa-arrow-down"></i>
                </div>
            </div>
        </div>
     );
}
 
export default Header;