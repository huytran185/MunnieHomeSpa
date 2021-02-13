import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './pages/Index/Index';
import Error from './pages/Error/Error';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Index}/>
          <Route  path='*' exact={true} component={Error}/>
        </Switch>
    </Router>
  );
}

export default App;
