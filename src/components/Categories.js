import React, { Component } from 'react';
import request from 'superagent'
import {Link} from 'react-router-dom';

class Categories extends Component {
  constructor(props){
    super(props);

    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    var {category} = this.props.match.params;
    request.get('https://mallory-furniture-admin.now.sh/api/v1/products?category=' + category )
      .then((response) => {
        this.setState({
        categories: response.body
        });
      })
  }
  componentDidUpdate(prevProps) {
    var {category} = this.props.match.params;
    if(this.props.match.params !== prevProps.match.params){
      request.get('https://mallory-furniture-admin.now.sh/api/v1/products?category=' + category )
        .then((response) => {
          this.setState({
          categories: response.body
        });
      })
    }
  }

  allItems = (e) => {
    var {category}  = this.props.match.params;
    request.get('https://mallory-furniture-admin.now.sh/api/v1/products?category=' + category)
    .then((response) =>{
    this.setState({
      categories: response.body
      })
    })
  }

  onSale = (e) => {
    var {category} = this.props.match.params;
    request.get('https://mallory-furniture-admin.now.sh/api/v1/products?category=' + category)
    .then((response) => {
    var showOnSale = this.state.categories.filter((item) =>{
      return item.onSale === true
      })
    this.setState({
      categories: showOnSale
      })
    });
  };

  render(){
    return(
      <div className="prodcuts">
        <div className="products__cards">
          <h1> {this.props.match.params.category.toUpperCase()} </h1>
          <h3>All {this.props.match.params.category} products</h3>
          <div className="products__btn">
            <button onClick={this.allItems} className="products__all">All Items</button>
            <button onClick={this.onSale} className="products__sale">On Sale</button>
          </div>
          <div className="products__counter">
            <span className="products__num"> {this.state.categories.length} </span>
            <span className="products__items"> items showing </span>
          </div>
          <ul className="product__columns">
          {this.state.categories.map((category) => {
            return (
            <li key={category._id} className="product"><Link to={"/single/" + category._id}>
              <div className="product__details">
                <img className="product__img" src={ category.imageLink } alt="product" />
                <p className="product__name"> { category.item } </p>
                <p className="product__price"> ${category.price}</p>
              </div>
            </Link></li>
            )
          })
        }
        </ul>
        </div>
      </div>
    );
    }
}
export default Categories;
