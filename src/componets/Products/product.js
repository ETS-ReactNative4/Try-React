import "../css/product/card.css"
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Productviewcard extends Component {
    state = {
        isFav: false,
        isCart: false
    }
    favHandler(id) {
        this.setState({ isFav: !this.state.isFav })
        this.props.addToFav(id)
    }
    cartHandler(id) {
        this.setState({ isCart: !this.state.isCart })
        this.props.addToCart(id)
    }
    render() {
        let { product } = this.props
        return (
            <div>
                <div className="product-card">
                    <div className="badge">Hot</div>
                    <div className="product-tumb product-img">
                        <img src={product.img} alt="myapp" />
                    </div>
                    <div className="product-details">
                        <span className="product-catagory">{product.type}</span>
                        <h5><a href="">{product.showName}</a></h5>
                        <div className="product-bottom-details">
                            <small className="product-price-small">$96.0}</small>
                            <div className="product-price pointer">${product.price}</div>

                        </div>
                        <div className="product-links">
                            <a><i
                                onClick={() => this.favHandler(product.id)}
                                className={`fa fa-heart heart  pointer ${this.state.isFav ? " text-danger" : ""}`}></i></a>
                            <a><i
                                onClick={() => this.cartHandler(product.id)}
                                className={`fa fa-shopping-cart cart pointer  ${this.state.isCart ? " text-info" : ""}`}></i></a>
                        </div>
                    </div>
                    <Link  to={`/product/${product.id}`} ><h6 className=" hel pointer">Details</h6></Link>
                    
                </div>
            </div>
        )
    }
}
