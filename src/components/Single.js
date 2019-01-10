import React, { Component } from 'react';
import request from 'superagent'

class Single extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: {}
    }
  }

  componentDidMount() {
    var {productId} = this.props.match.params;
    request.get('https://mallory-furniture-admin.now.sh/api/v1/products/' + productId )
      .then((response) => {
        console.log(response.body)
        this.setState({
        items: response.body
        });
    })
  }

  render(){
    return(
      <div className="single__container">
        <div className="single__image">
          <img className="single__img" src={ this.state.items.imageLink } alt="product" />
        </div>
        <div className="single__info">
          <div className="single__chart">
            <div className="single__data">
              <h3>{ this.state.items.item }</h3>
              <span className="price">${ this.state.items.price }</span>
              <hr/>
            </div>
            <div className="single__details">
              <div className="condition">
                <p>Condition</p>
                <span>{ this.state.items.condition }</span>
              </div>
              <div className="measure">
                <p>Measurements</p>
                <span> W:{ this.state.items.width }</span>
                <span> L:{ this.state.items.length }</span>
                <span> H:{ this.state.items.height }</span>
              </div>
              <div className="btn">
                <button className="button__add">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Single;
