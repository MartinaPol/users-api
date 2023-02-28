//Helper Functions
const helper = require('./helper_functions.js');

//Fetch a list of all users
const allUsers = () => {
    db.all("SELECT id, name, age, salary FROM users", (err, rows) => {
        if(err){
            return new Error(err);
        }
        return rows;
})}

//Fetch a user by it's unique ID
const userById = (userId) => {
    db.get("SELECT id, name, age, salary FROM users WHERE id=$id", {$id: userId}, (err, row) => {
        if(err){
            return new Error(err);
        }
        return `Requested user info: ${row}`;
    })
}

//Add a new user to the database
const addUser = (newUser) => {
    newUser.password = helper.enc(newUser.password);
    db.run("INSERT INTO users (name, age, salary, password) VALUES ($name, $age, $salary, $password)", {$name: newUser.name, $age: newUser.age, $salary: newUser.salary, $password: newUser.password}, (err, row) => {
        db.get("SELECT id, name, age, salary FROM users WHERE id=$id", {$id: newUser.id}, (err, row) => {
            if(err){
                return new Error(err);
            }
            return `A new user has been created: ${row}`;
        })
    })
}

//Delete a user
const deleteUser = (user) => {
    db.run("DELETE FROM users WHERE id:$id", {$id: user.id}, (err, row) => {
        if(err){
            return new Err(err);
        }
        return "User has been deleted";
    })
}

//Verify a password with database - returns TRUE/FALSE upon comparison
const verifyPW = (pw, name) => {
    const encPw = '';
    db.get("SELECT password FROM users WHERE name=$name", {$name: name}, (err, row) => {
        if(err){
            return new Error(err);
        }
        encPw = row;
    })
    helper.bcrypt.compare(pw, encPw, (err, result) => {
        if(err){
            return new Error(err);
        }
        return result;
    })
}


//Verifies if user exists in the database
const userExists = param => {
    db.get("SELECT name FROM users WHERE id=$param OR name=$param", {$param: param}, (err, row) => {
        if(row){
            return true;
        }
        return "User doesn't exist"
    })
}


module.exports = {allUsers, userById, addUser, deleteUser, verifyPW, userExists};