import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home'
import BlogPage from './components/BlogPage/BlogPage';
import About from './components/About/About'
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blogs" component={BlogPage} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
