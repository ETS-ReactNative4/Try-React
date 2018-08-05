import React, { Component } from 'react'
import Book from './book/book'
class Books extends Component {
  render() {
    return (
      <div>
        {this.props.books.map((book,i)=>{
            return (        
              <Book
               key={i} id={i} 
               book={book}
              deleteHandler={this.props.deleteBookHandler}
              editHandler = {this.props.editHandler}/>
            )
        })}
      </div>
    )
  }
}
 export default Books
 