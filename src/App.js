import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './pages/Index/Index';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import Dashboard from './pages/Admin/Dashboard';
import AService from './pages/Admin/Service';
import Customer from './pages/Admin/Customer';
import Staff from './pages/Admin/Staff';
import Type from './pages/Admin/Type';
import Voucher from './pages/Admin/Voucher';
import Login from './pages/Auth/Login';
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
            <Route path="/admin/dashboard" exact component={Dashboard}/>
            <Route path="/admin/service" exact component={AService}/>
            <Route path="/admin/customer" exact component={Customer}/>
            <Route path="/admin/staff" exact component={Staff}/>
            <Route path="/admin/Type" exact component={Type}/>
            <Route path="/admin/Voucher" exact component={Voucher}/>
            <Route path="/instagram" exact render={()=>{window.open("https://www.instagram.com"); return null;}}/>
            <Route  path='*' exact={true} component={Error}/>
        </Switch>
      </Router>
      <MessengerCustomerChat
        pageId="101053918473845"
        appId="309432867282551"
      />
    </Aux>
  );
}

export default App;
