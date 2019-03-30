import "../css/product/card.css"
import { ListGroupItem } from "reactstrap";
import React, { Component } from 'react'

export default class Favitem extends Component {
  render() {
    let { product, addFav, addToCart } = this.props
    let color = product.isFav ? "text-danger" : ''
    let color2 = product.isSelected ? "text-info" : ''
    let title = product.isSelected ? "Remove from cart" : 'Add to my cart'
    return (
      <ListGroupItem id="card" className="d-flex justify-content-between ">
        <img style={myCart} src={product.img} alt="product image" />
        <div style={textStyle}>
          {product.showName}</div>
        <div class="d-flex">
          <i
            title={title}
            onClick={() => addToCart(product.id)}
            className={`fa fa-cart-plus fa-2x pointer mr-3 ${color2}`}
            aria-hidden="true"></i>
          <i
            title="Remove from Fav"
            style={fontSyle}
            onClick={() => addFav(product.id)}
            className={`fa fa-heart ml-auto ${color}`}
            aria-hidden="true"></i></div>
      </ListGroupItem>
    )
  }
}


const fontSyle = {
  fontSize: 25 + "px",
  cursor: "pointer",
}
const textStyle = {
  cursor: "pointer"
}
const myCart = {
  width: 5 + "%",
}