import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input ,FormFeedback} from 'reactstrap';
import { connect } from "react-redux"
import React, { Component } from 'react'
import { modalToggler as toggle } from '../../redux/actions/Products/productActionsCreator/addModalAction'
import {addProductAction} from "../../redux/actions/Products/productActionsCreator/addProductAction";
import uuidv2 from "uuid"
import validator from 'validator';

class Openmodal extends Component {
    state = {
        name:undefined,
        age: undefined,
        id: undefined,
        email:undefined,
        about:undefined,
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
           if(!data.name.match(/^[a-z A-Z]+$/)){
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
     if(typeof data.age !== "undefined" ){
        if(!validator.isNumeric(data.age)){
            formIsValid = false;
            errors.age = "Age is not valid";
        }
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
        let errorCheck=this.handleValidation()        
 if(errorCheck.formIsValid){
    let product = {
        ...this.state,
        id: parseInt(uuidv2(), 16)
    }
    this.props.addProductAction(product)
    this.setState({
        name: undefined,
        age: undefined,
        id: undefined,
        email: undefined,
        about: undefined,
        errors: {}
    })
    this.props.toggle()

 }else{
    this.setState({
        ...this.state,
        errors:errorCheck.errors
    });
 }
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    style = {
        fontSize:48+"px"
    }
    render() {
        let { name, age,email,about } = this.state
       // console.log(this.state.errors)
        return (
            <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
            <ModalBody className="bg-dark text-light">
            <form className="my-2 px-2">
                <div className="form-group">
                    <label 
                    htmlFor="formGroupExampleInput">Name:</label>
                    <Input
                    invalid ={this.state.errors.name && true} 
                    type="text" 
                    className="form-control" 
                    id="formGroupExampleInput" 
                    value={name} 
                    name="name" placeholder="Enter your name"
                    onChange={this.changeHandler} />
                     <FormFeedback style={{fontSize:15+"px"}}>{this.state.errors.name}</FormFeedback>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Age:</label>
                    <Input
                    invalid ={this.state.errors.age && true} 
                    type="text" 
                    className="form-control" id="formGroupExampleInput" 
                    value={age} name="age" placeholder="Enter your age"
                    onChange={this.changeHandler} />
                     <FormFeedback  style={{fontSize:15+"px"}}>
                     {this.state.errors.age}</FormFeedback>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">email:</label>
                    <Input
                    invalid ={this.state.errors.email && true} type="text" className="form-control" id="formGroupExampleInput"
                    value={email} 
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
                    value={about} 
                    name="about" 
                    placeholder="Enter your short bio" onChange={this.changeHandler}
                    type="textarea" />
                    <FormFeedback  style={{fontSize:15+"px"}}>{this.state.errors.about}</FormFeedback>
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
const mapStateToProps = (state) => ({ modal: state.modalReducer })

export default connect(mapStateToProps, { toggle, addProductAction })(Openmodal)
