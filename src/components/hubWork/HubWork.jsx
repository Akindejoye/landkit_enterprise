import WorkHub from './hubWork.module.css';

const HubWork = () => {
    return ( 
        <div className={WorkHub.hubWrapper}>
            <div className={WorkHub.hubHeaderBox}>
                <h2 className={WorkHub.hubHeader}>
                    The hub for your team and your work
                </h2>
                <div className={WorkHub.hubSubHeaderBox}>
                    <p className={WorkHub.hubSubHeader}>
                        Slack is a place where your team comes together to collaborate,<br/>
                        important information can be found by the right people.
                    </p>
                </div>
            </div>
            <div className={WorkHub.hubSectionRowBox}>
                <div className={WorkHub.hubSectionRowBox1}>
                    <div className={WorkHub.transportBox}>
                        <div className={WorkHub.transportImgBox}>
                            <img src="/images/transport-1.svg" alt="Transport ONe" className={WorkHub.transportImg} />
                        </div>
                        <div className={WorkHub.transportTextBox}>
                            <h1 className={WorkHub.transportHeader}>Rapid Transport</h1>
                            <p className={WorkHub.transportText}>
                                Integrate the latest technologies with<br/>
                                an innovative platform that's always<br/>
                                getting better and launching new<br/>
                                features weekly. We fit your needs as<br/>
                                you grow.
                            </p>
                        </div>
                    </div>
                    <div className={WorkHub.transport2Box}>
                        <div className={WorkHub.transport2ImgBox}>
                            <img src="/images/transport-2.svg" alt="Transport 2" className={WorkHub.transport2Img} />
                        </div>
                        <div className={WorkHub.transportTextBox}>
                            <h1 className={WorkHub.transportHeader}>Rapid Transport</h1>
                            <p className={WorkHub.transportText}>
                                Integrate the latest technologies with<br/>
                                an innovative platform that's always<br/>
                                getting better and launching new<br/>
                                features weekly. We fit your needs as<br/>
                                you grow.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={WorkHub.hubSectionRowBox2}>
                    <div className={WorkHub.transport3Box}>
                        <div className={WorkHub.transport3ImgBox}>
                            <img src="/images/transport-2.svg" alt="Transport ONe" className={WorkHub.transportImg} />
                        </div>
                        <div className={WorkHub.transportTextBox3}>
                            <h1 className={WorkHub.transportHeader}>Rapid Transport</h1>
                            <p className={WorkHub.transportText}>
                                Integrate the latest technologies with<br/>
                                an innovative platform that's always<br/>
                                getting better and launching new<br/>
                                features weekly. We fit your needs as<br/>
                                you grow.
                            </p>
                        </div>
                    </div>
                    <div className={WorkHub.transport4Box}>
                        <div className={WorkHub.transport4ImgBox}>
                            <img src="/images/transport-1.svg" alt="Transport 2" className={WorkHub.transport2Img} />
                        </div>
                        <div className={WorkHub.transportTextBox4}>
                            <h1 className={WorkHub.transportHeader}>Rapid Transport</h1>
                            <p className={WorkHub.transportText}>
                                Integrate the latest technologies with<br/>
                                an innovative platform that's always<br/>
                                getting better and launching new<br/>
                                features weekly. We fit your needs as<br/>
                                you grow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HubWork;