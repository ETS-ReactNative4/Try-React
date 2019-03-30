
const regValidator = (data) => {
    let errors = {};
    let passCheck={}
    let formIsValid = true;

    //Name
    if (!data.userName) {
        formIsValid = false;
        errors.userName = " name Cannot be empty";
    }

    if (typeof data.userName !== "undefined") {
        if (!data.userName.match(/^[a-z A-Z]+$/)) {
            formIsValid = false;
            errors.userName = "Only letters";
        }
    }

    //Email
    if (!data.email) {
        formIsValid = false;
        errors.email = " Email Cannot be empty";
    }

    if (typeof data.email !== "undefined") {
        console.log(typeof data.email)
        let lastAtPos = data.email.lastIndexOf('@');
        let lastDotPos = data.email.lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && data.email.indexOf('@@') === -1 && lastDotPos > 2 && (data.email.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors.email = "Email is not valid";
        }
    }
    if (!data.password) {
        formIsValid = false
        errors.password = "please provide password"
    }
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    if (!typeof data.password==="undefined" && data.password.length<6) {
    errors.password= 'At least provide 6 Characters';
    } else if (strongRegex.test(data.password)) {
       passCheck.strong = "Strong 💪"
    } else if (mediumRegex.test(data.password)) {
        passCheck.medium ="Medium 😊"
    } else { 
        passCheck.weak ="Weak 🐄"
    }
  
    if (!data.confirmPassword && !data.password) {
        formIsValid = false
        errors.confirmPassword = "please provide password"
    }
    if(data.password!==data.confirmPassword){
        formIsValid = false
        errors.confirmPassword = "Password don't match!"
    }
    if (!data.confirmPassword && typeof data.password !=="undefined") {
        formIsValid = false
        errors.confirmPassword = "please provide the password agin"
    }
 
    return {
        formIsValid,
        errors,
        passCheck
    };
}
export default regValidator