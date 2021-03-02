import React from 'react'
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Layout from '../../components/UI/Layout/Layout';
import Services from './Services/Services';
import {Helmet} from 'react-helmet';
import Voucher from './Voucher/Voucher';
import Aux from '../../hoc/Auxulliary';
const index = (props)=>{
    return(
        <Aux>
            <Helmet>
                <title>Munnie Homéspa | Home Page</title>
            </Helmet>
            <Layout>
                <Welcome/>
                <About/>
                <Services/>
                <Voucher/>
            </Layout>
        </Aux>
    )
}
export default index;