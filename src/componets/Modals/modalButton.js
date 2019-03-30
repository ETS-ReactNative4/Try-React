import React, { Component } from 'react'
import FontAwesome from "react-fontawesome"
import {connect} from "react-redux"
import { modalToggler as toggle } from '../../redux/actions/Products/productActionsCreator/addModalAction';
import "../NavBar/anu.css"

class Addbutton extends Component {
    state={
        isSpin : true
    }
spinHandler=()=>{
   setTimeout(() => {
    this.setState({
        ...this.state,
           isSpin:!this.state.isSpin
       }) 
   },50);  
}
    render() {
        return (
         <FontAwesome
         className='fa-plus-square-o text-dark pointer love'
         name='plus-square'
         size='2x'
         onClick={this.props.toggle}
         title="Add one"
         onMouseEnter={this.spinHandler}
         onMouseLeave={this.spinHandler}
         spin={this.state.isSpin}
         style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
       />
        )
    }
}

export default connect(null, { toggle })(Addbutton)
