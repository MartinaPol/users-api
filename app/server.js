const usersDB = require('./database_contoroller.js');
const helper = require('./helper.functions.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

/* Modules needed
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
*/

const PORT = 4001;

app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}.`);
});


//Sign-Up
app.post('/sign-up', (req, res) => {
    const pw = req.body[password];
    const name = req.body[name];
    const pwConditions = helper.pwConditions(pw);
    if(pwConditions === false){
        res.send("The password has to contain at least one number")
    }
    if(usersDB.userExists(name) === true){
        res.send("User with that name already exist")
    }else{
        const add = usersDB.addUser(newUser);
        res.send(add);
    };
})


//Log-in
app.post('/login', (req, res) => {
    const name = req.body.name;
    const pw = req.body.password;
    if(usersDB.userExist(name) === true){
        if(usersDB.verifyPW(pw)){
            const token = helper.createToken();
            res.send(token);
        }
        res.send('Incorrect password.');
    }
    res.send('Incorrect name.');
})


//Locking all following routes behind a valid token
app.use('/', (req, res, next) => {
    const token = req.body[token];
    const validation = helper.tokenValidity(token);
    if(validation === "Your token is expired"){
        res.send("Your token is expired");
    }else if (validation !== true){
        res.send(validation);
    };
    next();
})


//Fetch a list of all users
app.get('/users', (req, res) => {
    const allUsers = usersDB.allUsers();
    res.send(allUsers);
});


//Fetch a specified user
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    if(helper.userExist(userId) === true){
        const foundUser = usersDB.userById(userId);
        res.send(foundUser);
    }else{
        res.send('The user wasn\'t found');
    }
})


//Add a new user to the database
app.post('/users', (req, res) => {
    const newUser = req.body;
    if(helper.userExist(newUser.name) === true){
        res.send("User with that name already exists")
    }else{
        const created = usersDB.addUser(newUser);
        res.send(created);
    };
})


//Delete a user by it's ID
app.delete('/users/:id', (req, res) => {
    const userToDelete = req.params.id;
    if(helper.userExist(userToDelete) !== true){
        res.send('The user you are trying to delete doesn\'t exist')
    }else{
        const deleted = usersDB.deleteUser(userToDelete);
        res.send(deleted);
    }
})

//db.close()