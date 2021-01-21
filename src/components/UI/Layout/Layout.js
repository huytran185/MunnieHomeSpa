import React, { Component } from 'react';
import Aux from '../../../hoc/Auxulliary';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
class Layout extends Component{
    render(){
        return(
            <Aux>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }
}
export default Layout;