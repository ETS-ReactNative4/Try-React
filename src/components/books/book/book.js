import React, {Component} from 'react'
import './book.css'
export default class Book extends Component {
    state = {
        books: this.props.book,
        isEdit: false
    }

    editBookHandler = () => {
        this.setState({
            ...this.state,
            isEdit: true
        })
       
    }
    updateBookHandler = () => {
        this.setState({
            ...this.state,
            isEdit: false
        })
         this.props.editHandler(this.state.books)
    }
    nameChangeHnadler = (e) => {
          let nb={
            name:e.target.value,
            price:this.state.books.price,
            writer:this.state.books.writer,
            des:this.state.books.des
        }
           this.setState({
           ...this.state,
           books :nb
       })
    }
    priceChangeHnadler = (e) => {
        let nb={
            name:this.state.books.name,
            price:e.target.value,
            type:this.state.books.type,
            writer:this.state.books.writer,
            des:this.state.books.des
        }
           this.setState({
           ...this.state,
           books :nb
       })
    }
deleteBook=(e)=>{
    let id = this.props.id
    this.props.deleteHandler(id)
}
    render() {
        let output = null
        if (this.state.isEdit) {
            output = (
                <div className=" bg-info mt-2 p-2">
                <div className="row">
                <div className="col-6">
                    <div className="col-12"><div className="card-title"> 
                    <input type="text" onChange={this.nameChangeHnadler} value={this.state.books.name}/>
                    </div> 
                    <input type="text" onChange={this.priceChangeHnadler} value={this.state.books.price}/>
                    </div>
                </div>
                <div className="col-6">
                <p>Writer :{this.props.book.writer}</p>
                <p className="mt-1">Type :{this.state.books.type}</p>
                <p className="mt-1">About:{this.state.books.des}</p>
                </div>
                </div>
                <div className="text-center">
                <button className="btn btn-warning mr-3 px-4 d-inline-block" onClick={this.updateBookHandler}>Save</button>
                <button className="btn btn-secondary">Add Cart</button>
                </div>
                </div>
            )

        } else {
            output = (
            
                <div className=" bg-info mt-2 p-2 border-warning">
                    <span className="close" onClick={this.deleteBook.bind(this)}>X</span>
                <div className="row">
                <div className="col-6">
                    <div className="card-title"> <h3>{this.state.books.name}</h3></div> 
                    <p>Price: ${this.state.books.price}</p>
                </div>
                <div className="col-6">
                <p>Writer :{this.props.book.writer}</p>
                <p className="mt-1">Type :{this.state.books.type}</p>
                <p className="mt-1">About:{this.state.books.des}</p>
                </div>
                </div>
                <div className="text-center">
                <button className="btn btn-warning mr-3 px-4 d-inline-block" onClick={this.editBookHandler}>Edit</button>
                <button className="btn btn-secondary">Add Cart</button>
                </div>
                </div>
            )
        }

        return (
            <div>
                {output}
            </div>
        )
    }
}
