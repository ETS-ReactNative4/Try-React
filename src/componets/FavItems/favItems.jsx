import React from 'react'
import { connect } from "react-redux"
import { ListGroup } from "reactstrap";
import Favitem from './favItem.jsx'
import { favProductAction } from "../../redux/actions/Products/productActionsCreator/favProductAction"
import { addCartAction } from '../../redux/actions/Products/productActionsCreator/addCartAction';
import { Link } from "react-router-dom";
const Favitems = ({ favItems, favProductAction, addCartAction }) => {
  let favs = favItems.filter(fav => fav.isFav)
  var fav = null
  var favsLength = 0
  if (favs.length < 1) {
    fav = <h6 style={{ color: "red" }}>You have no Favrouite product at this moments  <small className="pointer text-info"><Link to="/">Shopping?</Link></small></h6>
  } else {
    fav = favs.map(fav => <Favitem key={Math.random()} addFav={favProductAction} addToCart={addCartAction} product={fav} />)
    favsLength = fav.length
  }
  return (
    <div className="container">
      <h5 className="mt-5">Your Favroutie Products:</h5><hr />
      <h6>{favsLength}</h6>
      <ListGroup>
        {
          fav
        }
      </ListGroup>
      <button class="btn btn-outline-seceondary"><Link to="/mycart">Go to My-Cart</Link></button>
    </div>
  )
}
const mapStateToProps = (state) => ({
  favItems: state.Products.Products
})
export default connect(mapStateToProps, { favProductAction, addCartAction })(Favitems)

