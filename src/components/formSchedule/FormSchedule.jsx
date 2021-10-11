import Complete from './formSchedule.module.css';

const FormSchedule = () => {
    return ( 
        <div className={Complete.formWrapperTop}>
            <div className={Complete.formWrapper}>
                <div className={Complete.formCentered}>
                    <img src="/images/transport-1.svg" alt="Form" className={Complete.formImage} />
                    <h2 className={Complete.formHeader}>Schedule a demo with us</h2>
                    <p className={Complete.formText}>
                        Anyone can solve anything when you have it.
                    </p>
                    <form className={Complete.formBox}>
                        <div className={Complete.formRow1}>
                            <input type="text" placeholder='First name' className={Complete.inputFirst} />
                            <input type="text" placeholder='User name' className={Complete.inputUser} />
                        </div>
                        <div className={Complete.formRow2}>
                            <input type="email" placeholder='Email' className={Complete.inputEmail} />
                            <input type="password" placeholder='Password' className={Complete.inputPassword} />
                        </div>
                        <button type='submit' className={Complete.formBtn}>Complete registration</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default FormSchedule;