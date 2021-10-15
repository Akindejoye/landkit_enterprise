import BuildRender from '../../components/buildRender/BuildRender';
import CardSection from '../../components/cardSection/CardSection';
import Integration from '../../components/common/integration/Integration';
import Enterprise from '../../components/enterprise/Enterprise';
import Header from '../../components/header/Header';
import HubWork from '../../components/hubWork/HubWork';
import Innovate from '../../components/innovate/Innovate';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import FormSchedule from '../../components/formSchedule/FormSchedule';
import PageLand from './landingPage.module.css'

const LandingPage = () => {
    return ( 
        <>
           <div className={PageLand.landMain}>
                <Navigation />
                <Header />
                <HubWork />
                <Enterprise />
                <Innovate />
                <Integration />
                <CardSection />
                <Integration />
                <BuildRender />
                <FormSchedule />
                <Footer />
           </div>
        </>
     );
}
 
export default LandingPage;