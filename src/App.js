import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Terms from './components/Terms';
import Multiple from './components/Multiple';
import Single from './components/Single';
import Categories from './components/Categories';
import Shoppingcart from './components/Shoppingcart';

class App extends Component {

constructor(){
super();

  this.state = {
    cart: true,
    cartItems: []
  }
}

  toggleCart = () => this.setState({cart: !this.state.cart})

  addToCart = (product) => this.setState({ cartItems: this.state.cartItems.concat(product) })

  removeItems = (item) => {
    const newCartItems = this.state.cartItems.filter(cartItem => {
      return cartItem !== item;
    })
  this.setState({
    cartItems: [...newCartItems]
  })
}

  render() {
    return (
      <React.Fragment>
      <Navbar
        toggleCart = {this.toggleCart}
      />
      <Switch>
      <Route path= "/" exact component={Home} />
      <Route path= "/about" component={About}/>
      <Route path= "/terms" component={Terms}/>
      <Route path= "/multiple" component={Multiple}/>
      <Route path= "/single/:productId" render={(props) => < Single {...props} addToCart={this.addToCart}/> } />
      <Route path= "/categories/:category" component={Categories}/>
      </Switch>
      <Shoppingcart
        toggleCart = {this.toggleCart}
        cart = {this.state.cart}
        cartItems = {this.state.cartItems}
        removeItems = {this.removeItems}
        />
      <Footer />
      </React.Fragment>
    )
  }
}

export default App;
