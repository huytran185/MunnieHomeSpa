import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './pages/Index/Index';
import Error from './pages/Error/Error';

function App() {
  return (
    <Router>
        <Route path="/" exact component={Index}/>
        <Route component={Error}/>
    </Router>
  );
}

export default App;
