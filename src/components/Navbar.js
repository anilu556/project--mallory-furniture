import React, { Component } from 'react';
import logowhite from '../images/logowhite.svg';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className="menu">
        <React.Fragment>
          <ul className="menu__about">
            <li><Link to="/"><img className="menu__logo"src={logowhite} alt="logo"/></Link></li>
            <li><Link className="menu__white" to="/about">About</Link></li>
            <li><Link className="menu__white" to="/terms">Terms + Conditions</Link></li>
            <li> | </li>
            <li><Link className="menu__white" to="/multiple">All</Link></li>
            <li><Link className="menu__blue" to="/categories/seating">Seating</Link></li>
            <li><Link className="menu__blue" to="/categories/tables">Tables</Link></li>
            <li><Link className="menu__blue" to="/categories/desks">Desks</Link></li>
            <li><Link className="menu__blue" to="/categories/storage">Storage</Link></li>
            <li><Link className="menu__blue" to="/categories/bedroom">Bedroom</Link></li>
            <li><Link className="menu__blue" to="/categories/miscellaneous">Misc</Link></li>
            <li> | </li>
            <button onClick={this.props.toggleCart} className="shopping__btn">
            <i class="fas fa-shopping-cart"></i>
            </button>
          </ul>
        </React.Fragment>
        </nav>
    );
  }
}

export default Navbar;
