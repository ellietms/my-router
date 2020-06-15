import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './about';
import Sky from './Sky';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Moon from './Moon';

function App() {
  return (
    <Router> 
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sky" exact component={Sky} />
      <Route path="/sky/:id" component ={Moon} />
      </Switch>
    </div>
    </Router>
  );
}


const Home = () => {
  return(
  <div>
    <h1>
      Home
    </h1>
  </div>
  )
}


export default App;
