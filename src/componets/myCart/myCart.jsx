
import   "./new.css"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import  {addCartAction} from "../../redux/actions/Products/productActionsCreator/addCartAction"
import React, { Component } from 'react'
import  {addCal} from "../../redux/actions/Products/productActionsCreator/addCalAction"
import  {subsCal} from "../../redux/actions/Products/productActionsCreator/subsCalAction"
import  {defaultCal} from "../../redux/actions/Products/productActionsCreator/defaultCal"
import Cartitem from "./cartItem.jsx";

 class Mycart extends Component {
   
  render() {
   console.log(this.props.totall)
    let cartItems = this.props.cartItems
    let Mycart = cartItems.filter(cart => cart.isSelected)
    var cart  =null
      if(Mycart.length<1){
      cart = <div style={{backgroundColor:"#CACBCA"}}>
        <h6 className="mt-5 text-center" style={{color:"red"}}>My cart is now empty 😒<small className="pointer text-info"><Link to="/">Shopping?</Link></small></h6>
        <img className="img-fluid" src={require("../../images/cart-empty.jpg")} alt="nothing..........."/>
      </div>
      }else{
        cart = <div className="container mt-2">
        <h5>My-Cart:  {Mycart.length}</h5><hr/><hr/>
        <div>
            <h1>Shopping Cart</h1>
    
    <div class="shopping-cart">
    
        <label class="myCart-image"></label>
      <div class="column-labels">
        <label class="myCart-details">Product</label>
        <label class="myCart-price">Price</label>
        <label class="myCart-quantity">Quantity</label>
        <label class="myCart-removal">Remove</label>
        <label class="myCart-line-price">Total</label>
      </div>
    
      {Mycart.map(cart=><Cartitem 
      cart={cart} 
      removeFromCart={this.props.addCartAction}
      addCal={this.props.addCal}
      subCal={this.props.subsCal}
      initData={this.props.defaultCal}
      key={cart.id}/>)}
    
      <div class="totals">
        <div class="totals-item">
          <label>Subtotal</label>
          <div class="totals-value" id="cart-subtotal">{this.props.totall}</div>
        </div>
        <div class="totals-item">
          <label>Tax (5%)</label>
          <div class="totals-value" id="cart-tax">{this.props.totall*5/100}</div>
        </div>
        <div class="totals-item">
          <label>Shipping</label>
          <div class="totals-value" id="cart-shipping">15.00</div>
        </div>
        <div class="totals-item totals-item-total">
          <label>Grand Total</label>
          <div class="totals-value" id="cart-total">{this.props.totall*5/100 + this.props.totall+15}</div>
        </div>
      </div>
          
          <button class="checkout"><Link to="/product/checkout">Checkout</Link>  <span><i class="fa fa-paypal" aria-hidden="true"></i></span>
    <span><i class="fa fa-cc-mastercard" aria-hidden="true"></i></span></button>
   
    </div>
          </div>
        </div>
      }
    return (
      <div>{cart}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.Products.Products,
  totall:state.Totall
})
export default connect(mapStateToProps,{addCartAction,addCal,subsCal,defaultCal})(Mycart)
const nothing={
     width:50+"%"
}