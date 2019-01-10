import React, { Component } from 'react';
import request from 'superagent'
import {Link} from 'react-router-dom';

class Multiple extends Component {

  constructor(){
    super();

      this.state = {
      products: [],
      };
    }

  componentDidMount() {
    request.get('https://mallory-furniture-admin.now.sh/api/v1/products')
      .then((response) => {
        console.log(response.body)
      this.setState({
      products: response.body
      })
    })
  }

  allItems = (e) => {
    request.get('https://mallory-furniture-admin.now.sh/api/v1/products')
    .then((response)=>{
      this.setState({
        products: response.body
      })
    })
  }

  onSale = (e) => {
    request.get('https://mallory-furniture-admin.now.sh/api/v1/products')
    .then((response)=>{
    var showOnSale = this.state.products.filter((product) => {
      return product.onSale === true
    })
    this.setState({
      products: showOnSale
      })
    })
  }

  render() {
    return (
      <div className="container">
          <div className="prodcuts">
            <div className="products__cards">
              <h1>All Products</h1>
              <h3>All available listings</h3>
              <div className="products__btn">
                <button onClick={this.allItems} className="products__all">All items</button>
                <button onClick={this.onSale} className="products__sale">On Sale</button>
              </div>
              <div className="products__counter">
                <span className="products__num"> {this.state.products.length} </span>
                <span className="products__items"> items showing </span>
              </div>
              <ul className="product__columns">
              {this.state.products.map((product) => {
                return (
                  <li key={product.id} className="product"><Link to={"/single/" + product._id}>
                    <img className="product__img" src={ product.imageLink } alt="product" />
                    <p className="product__name"> { product.item } </p>
                    <p className="product__price"> ${product.price}</p>
                </Link></li>
                )
              })
            }
            </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default Multiple;
