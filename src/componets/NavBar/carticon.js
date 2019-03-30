
import React, { Component } from 'react'
import {connect} from "react-redux";
import "./c.css"
 class carticon extends Component {
  render() {
    let count=0
    let data = this.props.Products.filter(pro=>pro.isSelected)
    count = data.length
    return (
      <div className="wrapper">
      <i className="fa fa-cart-plus text-white fa-2x" aria-hidden="true"></i>
        <div class="icon-cart">
    <div class="notificacao">{count}</div>
  </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  Products: state.Products.Products
})
export default connect(mapStateToProps)(carticon)