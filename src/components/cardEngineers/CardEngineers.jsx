import Engine from './cardEngineers.module.css';

const CardEngineers = ( props ) => {
    return ( 
        <div className={Engine.cardWrapper} style={props.style}>
        <div className={Engine.cardCentered}>
            <img src={props.image} alt="Company Logo" className={Engine.cardLogo} />
            <h3 className={Engine.cardHeader}>{props.header}</h3>
            <p className={Engine.cardText}>
                Integrate the latest<br />
                technologies with an<br />
                innovative platform that's<br />
                always.
            </p>
            <span className={Engine.cardSpan}>Read more</span>
        </div>
    </div>
     );
}
 
export default CardEngineers;