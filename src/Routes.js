import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Terms from './components/Terms';
import Multiple from './components/Multiple';
import Single from './components/Single';
import Categories from './components/Categories';

class Routes extends Component {

render(){
  return(
      <Switch>
      <Route path= "/" exact component={Home} />
      <Route path= "/about" component={About}/>
      <Route path= "/terms" component={Terms}/>
      <Route path= "/multiple" component={Multiple}/>
      <Route path= "/single/:productId" component={Single}/>
      <Route path= "/categories/:category" component={Categories}/>
      </Switch>
    )
  }
}

export default Routes;
