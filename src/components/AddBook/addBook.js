import React, { Component } from 'react'

export default class AddBook extends Component {
  state = {
        books: this.props.book,
        isInput: false
    }

    addBookHandler = () => {
        this.setState({
            ...this.state,
            isInput: true
        })
       
    }
    submitBookHandler = () => {
        this.setState({
            ...this.state,
            isInput: false
        })
         this.props.addHandler(this.state.books)
    }
    nameAddHandler = (e) => {
          let nb={
            name:e.target.value,
            price:this.state.books.price,
            // writer:this.state.books.writer,
            // des:this.state.books.des
        }
        this.setState({
            ...this.state,
            books: nb
        })
    }
    priceAddHandler = (e) => {
        let nb={
            name:this.state.books.name,
            price:e.target.value,
            // type:this.state.books.type,
            // writer:this.state.books.writer,
            // des:this.state.books.des
        }
         this.setState({
             ...this.state,
             books: nb
         })
          }
  
      render() {
          let outPut = null
          if(this.state.isInput){
                outPut= <div className="row container">
                <input className="col-5" type="text"  onChange={this.nameAddHandler} placeholder="Enter Book Name"/>
                <input className="col-5 ml-2" onChange={this.priceAddHandler}
                placeholder="Enter Book Price"/>
                <button  className="btn px-4 col-1 btn-info ml-3" onClick={this.submitBookHandler}>ADD</button>
                </div>
          }else{
           outPut = <button className="btn btn-success" onClick={this.addBookHandler}>ADD BOOK</button>
          }
    return (
     <div className="text-center"> 
       
     {outPut}
     </div>
    )
  }
}
