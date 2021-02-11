import React from 'react';
import Aux from '../../../hoc/Auxulliary';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
const layout = props =>{
        return(
            <Aux>
                <Header/>
                <main>
                    {props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }

export default layout;