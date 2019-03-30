import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input ,FormFeedback} from 'reactstrap';
import { connect } from "react-redux"
import React, { Component } from 'react'
//import { editModalToggler } from '../../redux/actions/Products/productActionsCreator/updateProductAction';
import { updateProductAction } from '../../redux/actions/Products/productActionsCreator/updateProductAction';
//import validator from 'validator';
class Updatemodal extends Component {
 state = {
     name: undefined,
     age: undefined,
     email: undefined,
     about: undefined,
     id:undefined,
     errors:{}
 }
 handleValidation(){
    let data= this.state
    let errors = {};
    let formIsValid = true;

    //Name
    if(!data.name){
       formIsValid = false;
       errors.name = " name Cannot be empty";
    }

    if(typeof data.name !== "undefined"){
       if(!data.name.match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors.name = "Only letters";
       }        
    }

    //Email
    if(!data.email){
       formIsValid = false;
       errors.email = " Email Cannot be empty";
    }

    if(typeof data.email !== "undefined"){
       let lastAtPos = data.email.lastIndexOf('@');
       let lastDotPos = data.email.lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && data.email.indexOf('@@') === -1 && lastDotPos > 2 && (data.email.length - lastDotPos) > 2)) {
          formIsValid = false;
          errors.email = "Email is not valid";
        }
   }  
   //Age
   if(!data.age){
    formIsValid = false;
    errors.age = " Age Cannot be empty";
 }

 //About
 if(!data.about){
    formIsValid = false;
    errors.about = "Bio Cannot be empty";
 }
//  if(typeof data.about !== "undefined" ){
//     if(data.about.length<20){
//         formIsValid = false;
//         errors.about = "Bio must have at least 20 characters";
//     }else if(data.about.length>50){
//          formIsValid = false;
//          errors.about = "Bio don't allow over 50 charactars"
//     }
//  }
   return {
       formIsValid,
       errors
   };
}
submitHandler = (event) => {
    event.preventDefault()
   // let errorCheck=this.handleValidation()  
    let { name, age,email,about} = this.state
    let { name:propsName, age:propsAge,email:propsEmail,about:propsAbout}= this.props.Updatemodal.updateData
    

    let user = {
        name:name?name:propsName,
        age:age?age:propsAge,
        email:email?email:propsEmail,
        about:about?about:propsAbout,
        id: this.props.Updatemodal.updateData.id
    }      
    this.setState({

        ...this.state,
        ...user
    })
    this.props.updateProductAction(user)
  
// if(errorCheck.formIsValid){

// this.setState({
//     name: undefined,
//     age: undefined,
//     id: undefined,
//     email: undefined,
//     about: undefined,
//     errors: {}
// })
// }else{
// this.setState({
//     ...this.state,
//     errors:errorCheck.errors
// });
// }
}
//  submitHandler = (event) => {
//      event.preventDefault()
//      let {
//          name,
//          age,
//          email,
//          about
//      } = this.state
//      let uname = typeof name !== "undefined" ? this.state.name : this.props.Updatemodal.updateData.name
//      let uage = typeof age !== "undefined" ? this.state.age : this.props.Updatemodal.updateData.age
//      this.props.Updatemodal.updateData.name
//      let uemail = typeof email !== "undefined" ? this.state.email : this.props.Updatemodal.updateData.email
//      let uabout = typeof about !== "undefined" ? this.state.about : this.props.Updatemodal.updateData.about

//      let user = {
//          name:uname,
//          age:uage,
//          email:uemail,
//          about:uabout,
//          id: this.props.Updatemodal.updateData.id
//      }
//      this.props.updateProductAction(user)
//      this.setState({
//          name: undefined,
//          age: undefined,
//          email: undefined,
//          about: undefined
//      })
//      this.props.editModalToggler(user)

//  }
 changeHandler = (event) => {
     this.setState({
         [event.target.name]: event.target.value
     })
 }

    render() {
        let { name, age,email,about} = this.state
        let { name:propsName, age:propsAge,email:propsEmail,about:propsAbout}= this.props.Updatemodal.updateData
    return (
        <Modal isOpen={this.props.Updatemodal.mode} toggle={this.editModalToggler} className={this.props.className}>
        <ModalHeader toggle={this.props.editModalToggler}>Modal title</ModalHeader>
        <ModalBody className="bg-dark text-light">
        <form className="my-2 px-2">
            <div className="form-group">
                <label 
                htmlFor="formGroupExampleInput">Name:</label>
                <Input
                invalid ={this.state.errors.name && true} 
                type="text" 
                className="form-control" id="formGroupExampleInput" 
                value={name?name:propsName} name="name" placeholder="Enter your name"
                onChange={this.changeHandler} />
                 <FormFeedback style={{fontSize:15+"px"}}>{this.state.errors.name}</FormFeedback>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Age:</label>
                <Input
                invalid ={this.state.errors.age && true} 
                type="text" 
                className="form-control" id="formGroupExampleInput" 
                value={age?age:propsAge} name="age" placeholder="Enter your age"
                onChange={this.changeHandler} />
                 <FormFeedback  style={{fontSize:15+"px"}}>
                 {this.state.errors.age}</FormFeedback>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">email:</label>
                <Input
                invalid ={this.state.errors.email && true} type="text" className="form-control" id="formGroupExampleInput"
                value={email?email:propsEmail} 
                name="email" 
                placeholder="Enter your email"
                onChange={this.changeHandler} />
                 <FormFeedback  style={{fontSize:15+"px"}}>{this.state.errors.email}</FormFeedback>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Short Bio:</label>
                <Input
                invalid={this.state.errors.email && true} 
                id="formGroupExampleInput" 
                value={about?about:propsAbout} 
                name="about" 
                placeholder="Enter your short bio" onChange={this.changeHandler}
                type="textarea" />
                <FormFeedback  style={{fontSize:15+"px"}}>{this.state.errors.email}</FormFeedback>
            </div>
        </form>
        </ModalBody>
        <ModalFooter>
        <Button onClick={this.submitHandler} className="btn btn-outline-success" type="button">Submit</Button>
        <Button color="outline-warning" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
        )
    }
}
const mapStateToProps = (state) => ({ Updatemodal: state.Data })

export default connect(mapStateToProps, {updateProductAction})(Updatemodal)
