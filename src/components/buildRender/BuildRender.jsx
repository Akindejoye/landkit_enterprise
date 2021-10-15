import Render from './buildRender.module.css';
import Building from './../building/Building';

const BuildRender = () => {
    return ( 
        <div className={Render.renderWrapper}>
            <Building />
            <Building />
            <Building />
            <Building />
            <Building />
            <Building />
        </div>
     );
}
 
export default BuildRender;