import WordEnterprise from '../wordEnterprise/WordEnterprise';
import Fixing from './integration.module.css';

const Integration = () => {
    return ( 
        <div className={Fixing.integrateWrapper}>
            <div className={Fixing.integrateCentered}>
                <WordEnterprise />
                <h2 className={Fixing.integrateHeader}>
                    Integrated with your favorite platforms
                </h2>
                <p className={Fixing.integrateText}>
                    No matter your job title or department, Slack can help<br/>
                    your team work together and get things done.
                </p>
            </div>
        </div>
     );
}
 
export default Integration;