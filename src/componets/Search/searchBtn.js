import React, { Component } from 'react'
import {connect}from "react-redux"
import {searchProductAction} from "../../redux/actions/Products/productActionsCreator/searchProductAction"

//import {Input  } from "reactstrap";
class SearchArea extends Component {
    state = {
        query: '',
        results: []
      }
      handleInputChange = () => {
   
        this.props.searchProductAction(this.search.value)
      }
      componentDidMount(){
          this.setState({
             ...this.state,
             results:this.props.Products
          })
      }
  render() {     
    return (
      <div>
      <div className="input-group input-group-md">
      <div className="input-group-prepend">
        <span className="input-group-text prepend" id="inputGroup-sizing-sm">Search</span>
      </div>
      <input 
      ref={input => this.search = input} 
      onChange={this.handleInputChange} 
      type="text" 
      className="form-control inputt"
       aria-label="Sizing example input" 
       aria-describedby="inputGroup-sizing-sm"/>
    </div>
      </div>
    )
  }
}
const mapStateToProps = state=>({Products:state.Products.Products})
export default  connect(mapStateToProps,{searchProductAction})(SearchArea)
