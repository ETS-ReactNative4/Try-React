import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addCartAction } from '../../redux/actions/Products/productActionsCreator/addCartAction';
import { favProductAction } from "../../redux/actions/Products/productActionsCreator/favProductAction"
//import {  Row, Col,Container } from 'reactstrap';
import "./p.css"
import Productviewcard from './product';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

class Allproducts extends Component {

    searchingFor(term) {
        return function (x) {

            return x.showName.toLowerCase().includes(term.toLowerCase()) || !term;
        };
    }
    render() {

        let productsData;
        let term = this.props.searchData;

        productsData = this.props.Products
            .filter(this.searchingFor(term))
            .map(product => {
                return (

                    <Productviewcard
                        key={product.id}
                        product={product}
                        addToCart={this.props.addCartAction}
                        addToFav={this.props.favProductAction}

                    />

                );
            });

    
        let view;
        if (productsData.length <= 0 && !term) {
            view = <div className="products-wrapper">nai</div>;
        } else if (productsData.length <= 0 && term) {
            view = <div className="products">
                <div className="no-results">
                    <img
                        src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
                        alt="Empty Tree"
                    />
                    <h2>Sorry, no products matched your search!</h2>
                    <p>Enter a different keyword and try.</p>
                </div>
            </div>
        } else {
            view = (
                <CSSTransitionGroup
                    transitionName="fadeIn"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    component="div"
                    className="products"
                >
                    {productsData}
                </CSSTransitionGroup>
            );
        }
        return <div className="products-wrapper">{view}</div>
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.Products.Products,
        searchData: state.Products.SearchData
    }
}

export default connect(mapStateToProps, { addCartAction, favProductAction })(Allproducts) 
