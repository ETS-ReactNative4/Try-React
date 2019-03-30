import React, { Component } from 'react'
import { connect } from "react-redux"
class Favicon extends Component {
    state = {
        count: 0,

    }
    static getDerivedStateFromProps(props, state) {

        let data = props.Products.filter(pro => pro.isFav)
        state.count = data.length
    }
    render() {
        //console.log(this.state)
        return (
            <div className="wrapper">
                <i className={`fa fa-heart fa-2x love`} aria-hidden="true"></i>
                <div class="icon-cart">
                    <div class="notificacao">{this.state.count}</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    Products: state.Products.Products,
    id: state.Products.id
})
export default connect(mapStateToProps)(Favicon)

