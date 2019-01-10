import React, { Component } from 'react';
import request from 'superagent'
import {Link} from 'react-router-dom';

class Home extends Component {

  constructor(){
    super();

      this.state = {
      products: []
      };
    }

  componentDidMount() {
    request.get('https://mallory-furniture-admin.now.sh/api/v1/products')
      .then((response) => {
      this.setState({
      products: response.body
      })
    })
  }

  render() {
    return (
      <div className="container">
          <div className="prodcuts">
            <div className="products__slider">
              <h1> Mallory Furniture </h1>
              <h3> Your furniture is old. <br/> Ours is older.</h3>
            </div>
            <div className="products__cards">
              <h1>Featured Products</h1>
              <h3>Ckeck out some of our favorite listings</h3>
              <ul className="product__columns">
              {this.state.products.map((product) => {
                if ( product.featured === true)
                return (
                <li className="product"><Link to={"/single/" + product._id}>
                  <div className="product__details">
                    <div className="product__imgcont">
                      <img className="product__img" src={ product.imageLink } alt="product" />
                    </div>
                    <p className="product__name"> { product.item } </p>
                    <p className="product__price"> ${product.price}</p>
                  </div>
                </Link></li>
                )
              })
            }
            </ul>
            </div>
            <button className="button__all"><Link className="all__color" to={"/multiple/" }>All products</Link></button>
          </div>
          <div className="categories">
            <div className="categories__text">
              <h1>Browse by Categories</h1>
              <h3>Explore by furniture type.</h3>
            </div>
            <div className="categories__btn">
              <button className="cat__btn"><Link className="cat__color" to="/categories/seating">Seating</Link></button>
              <button className="cat__btn"><Link className="cat__color" to="/categories/tables">Tables</Link></button>
              <button className="cat__btn"><Link className="cat__color" to="/categories/desks">Desks</Link></button>
              <button className="cat__btn"><Link className="cat__color" to="/categories/bedroom">Bedroom</Link></button>
              <button className="cat__btn"><Link className="cat__color" to="/categories/storage">Storage</Link></button>
              <button className="cat__btn"><Link className="cat__color" to="/categories/miscellaneous">Misc</Link></button>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
