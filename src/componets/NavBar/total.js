import { connect } from "react-redux"
import React, { Component } from 'react'

class Total extends Component {
    render() {
        return (
            <h5 className="small">Total Products: {this.props.Products.length}</h5>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.Products.Products
    }
}
export default connect(mapStateToProps)(Total)

