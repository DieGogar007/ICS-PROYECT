import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Person from './components/addPerson'
import Event from './components/createEvent'
import Credential from './components/credential'
import Login from './components/login'

function App() {
  return (
    <Router>
      <Person/>
      <Event/>
      <Credential/>
      <Login/>
      
      <Route path='/Person' Component={Person} />
      <Route path='/Event' Component={Event} />
      <Route path='/Credential' Component={Credential} />
      <Route path='/Login' Component={Login} />

    </Router>

  )
}

export default App;
