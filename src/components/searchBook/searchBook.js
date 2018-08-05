import React, { Component } from 'react'

export default class searchBook extends Component {

    handleKeyPress=(e)=>{
        
    }
 render() {
   return (
       <div>
           <input type="text" className="form-control mb-2 border-dark" onKeyPress={this.handleKeyPress.bind(this)} placeholder="Search Your Fav Book" />
        </div>
   )
 }
}
