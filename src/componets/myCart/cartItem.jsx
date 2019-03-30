import "./new.css"
import React, { Component } from 'react'

class Cartitem extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { qunatity: 1 };
    this.props.initData(this.state.qunatity * this.props.cart.price)
  }

  handleChange(event) {
    this.setState({ qunatity: event.target.value });
  }
  subsHandler() {
    if (this.state.qunatity > 1) {
      this.setState({ qunatity: this.state.qunatity - 1 });
      this.props.subCal(this.props.cart.price)
    }

  }
  addHandler() {
    this.setState({ qunatity: this.state.qunatity + 1 });
    this.props.addCal(this.props.cart.price * this.state.qunatity)
  }

  render() {

    let { cart, removeFromCart } = this.props

    return (
      <div className="myCart">
        <div className="myCart-image">
          <img id="img" src={cart.img} />
        </div>
        <div className="myCart-details">
          <div className="myCart-title">{cart.name}</div>
          <p className="myCart-description">Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!</p>
        </div>
        <div className="myCart-price" ref={this.setTextInputRef} value={cart.price}>{cart.price}</div>
        <div className="myCart-quantity ">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text pointer" onClick={this.addHandler.bind(this)}>+</span>
            </div>
            <input
              type="text"
              className="text-center"
              onChange={this.handleChange.bind(this)}
              value={this.state.qunatity}
              />
            <div
              className="input-group-prepend"
              onClick={this.subsHandler.bind(this)}>
              <span className="input-group-text pointer" >-</span>
            </div>
          </div>

        </div>
        <div className="myCart-removal">
          <button
            onClick={() => removeFromCart(cart.id)}
            className="remove-myCart ml-5">
            Remove
        </button>
        </div>
        <div className="myCart-line-price">{cart.price * this.state.qunatity}</div>
      </div>
    )

  }
}

export default Cartitem

// const fontSyle = {
//     fontSize:25+"px",
//     cursor:"pointer",
// }
// const textStyle = {
//     cursor:"pointer",
//     display:"block"
// }