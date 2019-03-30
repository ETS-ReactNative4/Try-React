import React,{Component} from 'react'
import Total from "../NavBar/total";
import classnames from "classnames";
import "../css/product/action.css"
//import Addbutton from "../Modals/modalButton";
import Buttonsort from "../SortButtons/sortButton";
import Cart from "../NavBar/carticon";
import Favicon from '../NavBar/favicon';
import {Link as ME} from "react-router-dom";
import SearchArea from "../Search/searchBtn";

export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: false
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
  render() {
    return (
      <div className={classnames("hh d-flex bg-info justify-content-between p-2 px-2", {
        "hh--hidden": !this.state.visible
      })} >
      <Total/>
      <ME className="text-danger"  to="/mycart"><Cart/></ME>   
      <ME className="text-danger" to="/fav"><Favicon/></ME>
      <SearchArea/>
      <Buttonsort/>
      </div>
    )
  }
}

