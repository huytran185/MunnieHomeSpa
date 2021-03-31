import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './pages/Index/Index';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import {Admin} from './pages/Admin/Admin';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Aux from './hoc/Auxulliary'
function App() {
  return (
    <Aux>
      <Router>

        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/home" exact component={Index}/>
            <Route path="/service" exact component={Service}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/dashboard" exact component={Admin}/>
            {/* <Route path="/facebook" exact render={()=>{window.open("https://www.facebook.com/munniehomespa"); return null;}}/> */}
            <Route path="/instagram" exact render={()=>{window.open("https://www.instagram.com"); return null;}}/>
            <Route  path='*' exact={true} component={Error}/>
        </Switch>

      </Router>
      <MessengerCustomerChat
        pageId="<munniehomespa>"
        appId="<309432867282551>"
      />
    </Aux>
  );
}

export default App;
