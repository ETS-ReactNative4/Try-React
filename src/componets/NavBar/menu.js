import React, { Component } from 'react'
import './menu.css'
import classnames from "classnames";
import {NavLink as Link} from "react-router-dom";
export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
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
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
    
    render() {
        return (
          <div className={classnames("myNavBar", {
            "myNavBar--hidden": !this.state.visible
          })}>
          <header className="dark">
       <nav  className="navigation">
         <a href="javascript:void(0);" className="ic menu">
           <span className="line"></span>
           <span className="line"></span>
           <span className="line"></span>
         </a>
         <a href="javascript:void(0);" className="ic close"></a>
         <ul className="main-nav">
           <li className="top-level-link">
           
             <Link to="/"><span><img src={require("../../images/logo.png")} className="ty" alt=""/> </span></Link>   
           </li> 
           
           <li className="top-level-link">
             <a className="mega-menu "><span>Products</span></a>
             <div className=" sub-menu-block">
               <div className="d-flex justify-content-between">
                 <div className="
                 ">
                   <h2 className="sub-menu-head text-capitalize text-info">CLOTHING</h2>
                   <ul className="sub-menu-lists">
                     <li><a>Mens</a></li>
                     <li><a>Womens</a></li>
                     <li><a>Kids</a></li>
                     <li><a>New Born</a></li>
                     <li><a>View All</a></li>
                   </ul>           
                 </div>
                 <div className="
                 ">
                   <h2 className="sub-menu-head text-capitalize text-info">HANDBAGS</h2>
                   <ul className="sub-menu-lists">
                     <li><a>Wallets</a></li>
                     <li><a>Athletic bag</a></li>
                     <li><a>Backpack</a></li>
                     <li><a>Bucket Bag</a></li>
                     <li><a>View All</a></li>
                   </ul>
                 </div>
                 <div className="
                 ">
                   <h2 className="sub-menu-head text-capitalize text-info">SHOES</h2>
                   <ul className="sub-menu-lists">
                     <li><a>Mens</a></li>
                     <li><a>Womens</a></li>
                     <li><a>Kids</a></li>
                     <li><a>View All</a></li>
                   </ul>
                 </div>
               </div>
               
               <div className="d-flex">
                 <div className="">
                   <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;"/>
                 </div>
                 <div className="">
                   <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;"/>
                 </div>
               </div>
               
             </div>
           </li>
           <li className="top-level-link">
           <a><span>Services</span></a>    
           </li>
           <li className="top-level-link">
             <a className="mega-menu"><span>About</span></a>
             <div className="sub-menu-block">
               <div className="d-flex justify-content-between">
                 <div className="">
                   <h2 className="sub-menu-head text-capitalize text-info">COMPANY</h2>
                   <ul className="sub-menu-lists">
                     <li><a>About</a></li>
                     <li><a>Mission</a></li>
                     <li><a>Community</a></li>
                     <li><a>Team</a></li>
                   </ul>           
                 </div>
                 <div className="">
                   <h2 className="sub-menu-head">Media</h2>
                   <ul className="sub-menu-lists">
                     <li><a>News</a></li>
                     <li><a>Events</a></li>
                     <li><a>Blog</a></li>
                   </ul>
                 </div>
                 <div className="">
                   <h2 className="sub-menu-head text-capitalize text-info">CARRERS</h2>
                   <ul className="sub-menu-lists">
                     <li><a>New Opportunities</a></li>
                     <li><a>Life @ Company</a></li>
                     <li><a>Why Join Us?</a></li>
                   </ul>
                 </div>
               </div>
               
               <div className="d-flex justify-content-between">
                 <div className="">
                   <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;"/>
                 </div>
                 <div className="">
                   <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;"/>
                 </div>
               </div>
               
             </div>
           </li>
          
           <li className="top-level-link">
                
            <a><span> <Link className="text-dark" to="/login">Login</Link></span></a>    
           </li>

         </ul> 
         
       </nav>
       <Link to="/"><span><img src={require("../../images/logo.png")} className="ty lty" alt=""/> </span></Link>  
     </header>
     
   </div>
        )
    }
}
