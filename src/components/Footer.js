import React, { Component } from 'react';
import logoblack from '../images/logoblack.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import pinterest from '../images/pinterest.svg';

import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <React.Fragment>
        <div className="footer__conts">
          <div className="footer__logo">
            <li><Link to="/"><img className="footer__img"src={logoblack} alt="logo"/></Link></li>
            <hr/>
          </div>
        </div>
        <div className="list">
        <div className="list__company">
          <ul>
            <li className="list__name">Company</li>
            <li className="list__li"><Link to="/about">About</Link></li>
            <li className="list__li">Press</li>
            <li className="list__li"><Link to="/terms">Terms + Conditions</Link></li>
          </ul>
        </div>
        <div className="list__categories">
          <ul>
            <li className="list__name">Categories</li>
            <li className="list__li"><Link to="/categories/seating">Seating</Link></li>
            <li className="list__li"><Link to="/categories/tables">Tables</Link></li>
            <li className="list__li"><Link to="/categories/miscellaneous">Misc</Link></li>
          </ul>
        </div>
        <div className="list__social">
          <p className="list__name">Social</p>
          <img className="list__img"src={instagram} alt="instagram" />
          <img className="list__img"src={twitter} alt="twitter" />
          <img className="list__img" src={pinterest} alt="pinterest" />
        </div>
      </div>
      </React.Fragment>
    </div>
    );
  }
}

export default Footer;
