import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />

        <div className='app__body'>
          <Sidebar />

          <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route path='/'>
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

    
  );
}

export default App;
