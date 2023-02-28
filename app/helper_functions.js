//Verification functions
//For encryption: 
const bcrypt = require('bcrypt');
//For token creation: 
const jwt = require('jsonwebtoken');


//Checks if newly created PW adheres to the conditions: min 8 chars, at least 1 upper case, at least 1 number
export const pwConditions = (pw) => {
    if(pw.lenght >= 8){
        const regMaj = /[A-Z]/g;
        if(regMaj.match(pw) === true){
            const regNum = /[0-9]/g;
            const result = regNum.match(pw);
            return result;
        }else{
            return "The password has to contain at least one Upper case letter"
        }
    }else{
        return "The password needs to be at least 8 characters long"
    }
}

//Password encryption
export const enc = (pw) => {
    const saltRounds = 10;
    bcrypt.hash(pw, saltRounds, (err, encPW) => {
        if(err){
            return new Error(err);
        }
        return encPW;
    })
}

//Token creation
export const createToken = () => {
    let token = jwt.sign({data: 'validtoken'}, 'secret', {expiresIn: '1h'});
    return token;
}


//Token validity check
export const tokenValidity = (token) => {
    jwt.verify(token, 'secret', (err, decoded) => {
    if(err.message === 'jwt expired'){
        return "Your token is expired";
    }else if(err){
        return new Error(err);
    }else if(decoded === 'validtoken'){
        return true;
    }
})}