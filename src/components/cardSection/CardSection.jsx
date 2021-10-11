import CardEngineers from '../cardEngineers/CardEngineers';
import Porker from './cardSection.module.css';

const CardSection = () => {
    return ( 
       <div className={Porker.sectionWrapper}>
           <CardEngineers header='Engineers' image='/images/engineers.svg' style={{borderTop: '2px solid #ec6566'}} />
           <CardEngineers header='Disney' image='/images/disney.svg' style={{borderTop: '2px solid #296bcf'}} />
           <CardEngineers header='Square' image='/images/square.svg' style={{borderTop: '2px solid #221f20'}} />
           <CardEngineers header='Airbnb' image='/images/engineers.svg' style={{borderTop: '2px solid #ec6566'}} />
       </div>
     );
}
 
export default CardSection;