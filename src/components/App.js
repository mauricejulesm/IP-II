import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Authors from './pages/Authors';
import Earthquake from './pages/Earthquake';
import Weather from './pages/Weather';
import Header from './Header'
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <BrowserRouter>
            <React.Fragment>
              <Header/>
              <Route path='/' exact component={Home}/>
              <Route path='/about' exact component={About}/>
              <Route path='/authors' exact component={Authors}/>
              <Route path='/earthquake' exact component={Earthquake}/>
              <Route path='/weather' exact component={Weather}/>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/authors" exact component={Authors}/>
              <Route path="/earthquake" exact component={Earthquake}/>
              <Route path="/weather" exact component={Weather}/>
              <Footer/>
            </React.Fragment>
          </BrowserRouter>
        </React.Fragment>
    );
  }
}

export default App;
