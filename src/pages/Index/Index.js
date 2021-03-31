import React from 'react'
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Layout from '../../components/UI/Layout/Layout';
import Services from './Services/Services';
import {Helmet} from 'react-helmet';
import Voucher from './Voucher/Voucher';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import Aux from '../../hoc/Auxulliary';
const index = (props)=>{
    return(
        <Aux>
            <Helmet>
                <title>Munnie Homéspa | Home Pages</title>
            </Helmet>
            <Layout>
                <Welcome/>
                <About/>
                <Services/>
                <Voucher/>
                {/* <MessengerCustomerChat
                    pageId="<munniehomespa>"
                    appId="<309432867282551>"
                /> */}
            </Layout>
        </Aux>
    )
}
export default index;