const emailRegex = /^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z.-]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[$@$!%*?&.])(?=.*?[^\w\s]).{8,}$/;
const checkSpacialCharacter =  /^[^*|\":<>[\]{}`\\()'!.;@&#$]+$/;
const phoneNumberRegex = /^\d{10,}(?:,\d{10,})*$/;
const pinCodeRegex = /^([0-9]{6})$/;
const floatNumberRegex = /^\d+(\.\d{1,2})?$/;
const randomNumberRegex = Math.random()
.toString(36)
.replace(/[^a-z]+/g, '')
.substr(2, 2)
.toUpperCase() + Math.floor(100000 + Math.random() * 900000) 

export default { 
    emailRegex,
    passwordRegex,
    checkSpacialCharacter,
    phoneNumberRegex,
    pinCodeRegex,
    floatNumberRegex,
    randomNumberRegex
}