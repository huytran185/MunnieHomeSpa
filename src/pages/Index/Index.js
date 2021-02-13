import React from 'react'
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Layout from '../../components/UI/Layout/Layout';
import Services from './Services/Services';
import {Helmet} from 'react-helmet';


const index = (props)=>{
    return(
        <div>
            <Helmet>
                <title>Munnie Homéspa | Home Page</title>
            </Helmet>
            <Layout>
                <Welcome/>
                <About/>
                <Services/>
            </Layout>
        </div>
    )
}
export default index;