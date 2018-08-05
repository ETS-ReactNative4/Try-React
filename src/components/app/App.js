import React, { Component } from 'react'
import Books from '../books/books'
import AddBook from '../AddBook/addBook'
import SearchBook from '../searchBook/searchBook'
class App extends Component{
    state = {
        books:
        [ 
        { 
            name: "Pahari Lolona", price: 140,type:"Novel",writer:"Abu Bakar Kasem",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro nisi aperiam."
        },

        {
            name: "Chader Pahar", price: 140,type:"Novel",writer:"Sarat Chandro",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro nisi aperiam."
        },

        { 
            name: "Alo Adhari", price: 140,type:"Dramatic",writer:"Dipok Ray",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro nisi aperiam."
        },

        {
             name: "Elomelo Ratri", price: 140,type:"Historic",writer:"Kazi Najrul",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro nisi aperiam."
        },
        {
             name: "Himu", price: 140,type:"Adventure",writer:"Humayon Ahmed",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro nisi aperiam."
        },

        {
             name: "Bohubrihi", price: 140,type:"Family",writer:"Humayon Ahmed",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro nisi aperiam."
        },

        {
             name:"Ora Agaro Jon", price: 140,type:"Novel",writer:"Budai Jafor",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro nisi aperiam."
        },

        {
             name: "Gitanjlli", price: 140,type:"Novel",writer:"Rabindronath Takure",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro nisi aperiam."
        },
       
        ]
    }
    deleteBookHandler=(id)=>{
       let newBooks = [...this.state.books]
       newBooks.splice(id,1)
       console.log("delete successfully" )
       this.setState({
           books:newBooks
       })
    }
    // addBookHandler=()=>{
    //   console.log("working " + this.props.id)
    // }
    editHandler=(book)=>{
        this.setState({
             books : [...this.state.books,book]
        })
    }
     addHandler=(book)=>{
        this.setState({
             books : [...this.state.books,book]
        })
    }
render(){
    console.log(this.state.books);
    return (
        <div id="App" className="container mb-4">
        <h2  className="bg-info text-center py-1">TCBC Book Shop <hr/></h2>
        <h4>Total Books:{this.state.books.length}</h4>
        <div className="mb-2">
        <SearchBook data={this.state.books}/>
        <AddBook
        book={this.state.books}
         addHandler={this.addHandler}/> 
        </div>
        <Books books={this.state.books} deleteBookHandler={this.deleteBookHandler.bind(this)}
        editHandler={this.editHandler}/>
        </div>
    )
}
}
export default App