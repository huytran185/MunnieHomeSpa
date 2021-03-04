import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './pages/Index/Index';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/home" exact component={Index}/>
          <Route path="/service" exact component={Service}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/facebook" exact render={()=>{window.location.href ="https://www.facebook.com"; return null;}}/>
          <Route path="/instagram" exact render={()=>{window.location.href ="https://www.instagram.com"; return null;}}/>
          <Route  path='*' exact={true} component={Error}/>
        </Switch>
    </Router>
  );
}

export default App;
