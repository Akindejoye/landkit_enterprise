import Breaking from './innovate.module.css';

const Innovate = () => {
    return ( 
        <div className={Breaking.innovateWrapper} style={{backgroundImage:`url('/images/innovate.svg')`}}>
            <div className={Breaking.innovateImgBox}>
                <img src="/images/innovate.svg" alt="Innovation" className={Breaking.innovateImg} />
            </div>
            <div className={Breaking.innovateTextBox}>
                <p className={Breaking.innovateText}>
                    "Integrate the latest technologies with<br/>
                    an innovate platform When your team<br/>
                    needs to kick off a project, hire a new<br/>
                    employee, deploy some code"
                </p>
                <span className={Breaking.innovateTextName}>
                    Alice Meyer
                </span>
            </div>
        </div>
     );
}
 
export default Innovate;