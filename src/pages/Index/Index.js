import React from 'react'
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Layout from '../../components/UI/Layout/Layout'
const index = (props)=>{
    return(
        <div>
            <Layout>
                <Welcome/>
                <About/>
            </Layout>
        </div>
    )
}
export default index;