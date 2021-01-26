import { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';
import Login from './components/Login/Login'
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser, login } from './features/userSlice';
import { auth } from './firebase';

const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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
        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>
  );
}

export default App;
