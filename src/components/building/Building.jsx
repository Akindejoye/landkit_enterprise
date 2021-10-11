import Construct from './building.module.css';

const Building = () => {
    return ( 
        <div className={Construct.buildWrapper}>
            <div className={Construct.buildCentered}>
                <img src="images/build.svg" alt="Build" className={Construct.buildImg} />
                <h3 className={Construct.buildHeader}>
                    Messaging build for teams
                </h3>
                <p className={Construct.buildText}>
                    Slack is a place where your team comes<br />
                    together to collaborate, important<br />
                    information can be found by the.
                </p>
            </div>
        </div>
     );
}
 
export default Building;