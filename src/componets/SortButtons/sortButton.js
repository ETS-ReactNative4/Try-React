
import "./srt.css"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nameSortAciton } from '../../redux/actions/Products/productActionsCreator/nameSortAction'

class Buttonsort extends Component {

    render() {
        return (
            <div className="dropdown">
                <button className="dropbtn">Sort by</button>
                <div className="dropdown-content">
                    <p onClick={this.props.nameSortAciton("price")}>Price</p>
                    <p onClick={this.props.nameSortAciton("brand")}>Brand 2</p>
                    <p>Date</p>
                </div>
            </div>
        )
    }
}

export default connect(null, { nameSortAciton })(Buttonsort)