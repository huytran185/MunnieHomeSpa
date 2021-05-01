import React from 'react';
import Aux from '../../../hoc/Auxulliary';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Social from '../Social/Social';

//Layout component

const layout = props =>{
        return(
            <Aux>
                <Header/>
                <main>
                    <Social/>
                    {props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }

export default layout;