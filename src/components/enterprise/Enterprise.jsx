import WordEnterprise from '../common/wordEnterprise/WordEnterprise';
import Manseur from './enterprise.module.css';

const Enterprise = () => {
    return ( 

        <div className={Manseur.enterpriseWrapperBox}>
            <div className={Manseur.enterpriseWrapper}>
                <div className={Manseur.enterpriseReportBox}>
                    <WordEnterprise />
                    <h2 className={Manseur.reportHeaderlg}>
                        The most useful reports<br/>
                        <span className={Manseur.reportHeaderlgSpan}>ever created in history</span>.
                    </h2>
                    <p className={Manseur.reportHeaderText}>
                        Integrate the latest technologies with an<br/>
                        innovative platform that's always getting better<br/>
                        and lauching new features weekly. Integrate the<br/>
                        latest technologies with us.
                    </p>
                    <div className={Manseur.enterpriseLinkBox}>
                        <span className={Manseur.enterpriseWeb}>www.yoursite.com</span>
                        <span className={Manseur.enterpriseAction}>Check now</span>
                    </div>
                </div>
                <div className={Manseur.encyptionWrapper}>
                    <div className={Manseur.encyptionCentered}>
                        <div className={Manseur.tibleTextBox}>
                            <p className={Manseur.tibleText1}>246-Encyption compatible</p>
                            <p className={Manseur.tibleText2}>Complete and absolute control of all your things</p>
                        </div>
                        <div className={Manseur.tibleIconBox}>
                            <img src="/images/checkmark.svg" alt="Checkmark" className={Manseur.tibleIcon} />
                        </div>
                    </div>
                    <div className={Manseur.encyptionBorderBox}>
                        <span className={Manseur.encyptionBorder}></span>
                    </div>
                    <div className={Manseur.encyptionCentered}>
                        <div className={Manseur.tibleTextBox}>
                            <p className={Manseur.tibleText1}>246-Encyption compatible</p>
                            <p className={Manseur.tibleText2}>Complete and absolute control of all your things</p>
                        </div>
                        <div className={Manseur.tibleIconBox}>
                            <img src="/images/checkmark.svg" alt="Checkmark" className={Manseur.tibleIcon} />
                        </div>
                    </div>
                    <div className={Manseur.encyptionBorderBox}>
                        <span className={Manseur.encyptionBorder}></span>
                    </div>
                    <div className={Manseur.encyptionCentered}>
                        <div className={Manseur.tibleTextBox}>
                            <p className={Manseur.tibleText1}>246-Encyption compatible</p>
                            <p className={Manseur.tibleText2}>Complete and absolute control of all your things</p>
                        </div>
                        <div className={Manseur.tibleIconBox}>
                            <img src="/images/checkmark.svg" alt="Checkmark" className={Manseur.tibleIcon} />
                        </div>
                    </div>
                    <div className={Manseur.encyptionBorderBox}>
                        <span className={Manseur.encyptionBorder}></span>
                    </div>
                    <div className={Manseur.encyptionCentered}>
                        <div className={Manseur.tibleTextBox}>
                            <p className={Manseur.tibleText1}>246-Encyption compatible</p>
                            <p className={Manseur.tibleText2}>Complete and absolute control of all your things</p>
                        </div>
                        <div className={Manseur.tibleIconBox}>
                            <img src="/images/checkmark.svg" alt="Checkmark" className={Manseur.tibleIcon} />
                        </div>
                    </div>
                </div>
            </div>
                <div className={Manseur.enterpriseSpanBox}>
                    <span className={Manseur.enterpriseSpan}>All measured with a true tech measuring device</span>
                </div>
        </div>
        
     );
}
 
export default Enterprise;