import React, { Component } from 'react'
import { Route } from "react-router-dom"
//import Navbar from "./NavBar/navBar"
import Footer from "./Footer/footer.jsx"

import Favitems from "./FavItems/favItems.jsx"
import Mycart from "./myCart/myCart.jsx"
//import Updatemodal from "./Modals/updateModal";
import Openmodal from "./Modals/modal";
import Loginform from './Form/loginForm.jsx';
import Forget from './auth/forgotPass';
import Register from './Form/resgister.jsx';
import Menu from './NavBar/menu'
import Home from "./home/Home"
import Details from './details/details.jsx';
import Checkout from "./checkOut/checkOut"
import ThankPage from './checkOut/thanks.js';

class App extends Component {

    render() {

        return (
            <div className="container-fluid">
                <Menu />
                <Openmodal />
                <Route exact path="/" component={Home} />
                <Route exact path="/fav" component={Favitems} />
                <Route exact path="/Mycart" component={Mycart} />
                <Route />
                <Route exact path="/login" component={Loginform} />
                <Route path='/auth/forgetPass' component={Forget} />
                <Route path='/register' component={Register} />
                <Route path='/product/:id' component={Details} />
                <Route path='/product/checkout' component={Checkout} />
                <Route path="/thank_you" component={ThankPage}/>
                <Footer />
            </div>
        )
    }
}
export default App