import React, { useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Index from './pages/Index/Index';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import ShowBook from './pages/ShowBook/ShowBook';
import AService from './pages/Admin/Service';
import Customer from './pages/Admin/Customer';
import Staff from './pages/Admin/Staff';
import Type from './pages/Admin/Type';
import Voucher from './pages/Admin/Voucher';
import Login from './pages/Auth/Login';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Aux from './hoc/Auxulliary';
import { useSelector, useDispatch} from 'react-redux';
import {authCheckState} from './actions/auth';


function App() {
    const user = useSelector(state=>state.auth.userEmail);
    const isAuth = localStorage.getItem('token')
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(authCheckState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <Aux>
      <Router>
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/home" exact component={Index}/>
            <Route path="/service" exact component={Service}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/login" exact>
              {user!==null||isAuth!==null?<Redirect to="/admin/dashboard"/>:<Login/>}
            </Route>
            <Route path = "/admin/dashboard" exact>
              {user!==null||isAuth!==null?<ShowBook/>:<Redirect to="/login"/>}
            </Route>
            <Route path = "/admin/service" exact>
              {user!==null||isAuth!==null?<AService/>:<Redirect to="/login"/>}
            </Route>
            <Route path = "/admin/customer" exact>
              {user!==null||isAuth!==null?<Customer/>:<Redirect to="/login"/>}
            </Route>
            <Route path = "/admin/staff" exact>
              {user!==null||isAuth!==null?<Staff/>:<Redirect to="/login"/>}
            </Route>
            <Route path = "/admin/type" exact>
              {user!==null||isAuth!==null?<Type/>:<Redirect to="/login"/>}
            </Route>
            <Route path = "/admin/voucher" exact>
              {user!==null||isAuth!==null?<Voucher/>:<Redirect to="/login"/>}
            </Route>
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
