import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Ajouter from './Ajouter';
import BlogDetail from './BlogDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contenu">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/ajouter'>
              <Ajouter />
            </Route>
            <Route path={'/blogs/:id'}>
              <BlogDetail />
            </Route>
          </Switch>
        </div>  
      </div>
    </Router>
  );
}

export default App;
