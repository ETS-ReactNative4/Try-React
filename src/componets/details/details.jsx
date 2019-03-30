import React, { Component } from 'react'
import "./dt.css"
import { connect } from "react-redux"
import Zoom from 'react-img-zoom'
import { addCartAction } from '../../redux/actions/Products/productActionsCreator/addCartAction';
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2
    };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  cartHandler(id) {
    this.setState({ isCart: !this.state.isCart })
    this.props.addCartAction(id)
}
  render() {
    let product = this.props.data.filter(data => data.id === this.props.match.params.id)

    let showData = product.map(p => {
      return (
        <div>
          <div className="container header">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                {/* <img id="logo" className="mt-5" src={require("../../images/logo.png")} height="75"/> */}
              </div>
              <div className="col-xs-12 col-sm-6 col-md-8">
                <hr />
                <div className="menu">
                  <ul id="mainmenu">
                    <li className="active btn btn-link" data-submenu="polos">Polos</li>
                    <li className="btn btn-link">Dress Shirt</li>
                    <li className="btn btn-link">T-Shirts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-9 col-sm-8 product-display">
                <div className="col-lg-6  pointer">
                  {/* <img  src={p.img}/> */}
                  <Zoom
                    id="product-image"
                    img={p.img}
                    zoomScale={this.state.value}
                    width={400}
                    height={400}
                  />
                  <label for="h">Zoom scale</label>
                  <input
                    className="w-100 appearance-none bg-transparent range-slider-thumb-custom"
                    type="range"
                    min={1}
                    max={100}
                    step={1}
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                  />
                  <div className='value'>{this.state.value}</div>

                </div>
                <div className="col-lg-6 product-data">
                  <h3>{p.showName}</h3>
                  <img className="brand-logo" src="http://cdn.sanmar.com/catalog/images/sporttekheader.jpg" />
                  <h5>{p.model}</h5>
                  <div className="product-details">
                    <p>This heathered style is sure to be a contender for your favorite moisture-wicking, snag-resistant polo. Lightweight and breathable, it excels at sports or casual events and it's an exceptional value. </p>
                    <ul>
                      <li> 3.8-ounce, 100% polyester jersey </li>
                      <li> Gently contoured silhouette </li>
                      <li> Tag-free label </li>
                      <li> Self-fabric collar </li>
                      <li> Taped neck </li>
                      <li> Open Y-placket </li>
                      <li> Set-in, open hem sleeves </li>
                    </ul>
                  </div>
                  <a data-toggle="collapse" data-target=".size-chart">Size Chart</a>
                  <div className="size-chart collapse">
                    Size Chart goes here!!!
              </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 product-options well">
                <h4 id="logo-header">Brand</h4>
                <span data-toggle="modal" data-target="#logosModal">more</span>
                <div id="logo-display">
                  <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Logo_Google_2013_Official.svg" />
                  <div className="form-group additional-embroidery-options collapse" style={{ marginBottom: 0 }}>
                    <input id="text-display" className="form-control" type="text"
                      style={{ background: "rgba(200,200,200,.2)", border: "none", margin: .3 + "em" + " " + 0 + " " + 0, textAlign: "center" }} />
                  </div>
                </div>
                <div className="additional-embroidery-options collapse">
                  <div className="form-group">
                    <button id="text-preview-sans" className="btn btn-secondary">T</button>
                    <button id="text-preview-serif" className="btn btn-secondary">T</button>
                    <button id="text-preview-italic" className="btn btn-secondary">T</button>
                    <button id="text-preview-color" className="btn btn-secondary" data-color="black">&nbsp;</button>
                  </div>
                </div>
                <hr />
                <h4>Product Color</h4>
                <div id="colors">
                  <ul>
                    <li style={{ backgroundColor: "blue" }} data-color="darkblue" data-color-img="http://cdn.sanmar.com/catalog/images/imglib/mresjpg/2014/f9/LST660_cobalththr_model_front_072014.jpg"><span className="glyphicon"></span></li>
                    <li style={{ backgroundColor: "orangered" }} data-color="orangered" data-color-img="http://cdn.sanmar.com/catalog/images/imglib/mresjpg/2014/f9/LST660_deeporangehthr_model_front_072014.jpg"><span className="glyphicon"></span></li>
                    <li style={{ backgroundColor: "darkgreen" }} data-color="darkgreen" data-color-img="http://cdn.sanmar.com/catalog/images/imglib/mresjpg/2014/f9/LST660_forestgreenhthr_model_front_072014.jpg"><span className="glyphicon"></span></li>
                    <li style={{ backgroundColor: "green" }} data-color="grey" data-color-img="http://cdn.sanmar.com/catalog/images/imglib/mresjpg/2014/f9/LST660_graphitehthr_model_front_072014.jpg"><span className="glyphicon"></span></li>
                    <li style={{ backgroundColor: "red" }} data-color="hotpink" data-color-img="http://cdn.sanmar.com/catalog/images/imglib/mresjpg/2014/f9/LST660_pinkraspberryhthr_model_front_072014.jpg"><span className="glyphicon"></span></li>
                    <li style={{ backgroundColor: "black" }} data-color="red" data-color-img="http://cdn.sanmar.com/catalog/images/imglib/mresjpg/2014/f9/LST660_scarleththr_model_front_072014.jpg"><span className="glyphicon"></span></li>
                    <li style={{ backgroundColor: "gray" }} data-color="limegreen" data-color-img="http://cdn.sanmar.com/catalog/images/imglib/mresjpg/2014/f9/LST660_turfgreenhthr_model_front_072014.jpg"><span className="glyphicon"></span></li>

                  </ul>
                </div>
                <hr />
                <h4>Product Size</h4>
                <div id="sizes">
                  <ul>
                    <li data-size="xs">xs</li>
                    <li data-size="s">s</li>
                    <li data-size="m">m</li>
                    <li data-size="l">l</li>
                    <li data-size="xl">xl</li>
                    <li data-size="2x" data-price="2">2x</li>
                  </ul>
                </div>
                <hr />

                <div className="price">
                  <h1>${p.price}</h1>
                </div>
                <button type="button"  className="btn btn-primary" onClick={() => this.cartHandler(p.id)}>ADD to Cart</button>
              </div>
            </div>
          </div>
        </div>)
    })

    return (
      <div>
        {showData}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  data: state.Products.Products
})

export default connect(mapStateToProps,{addCartAction})(Details)