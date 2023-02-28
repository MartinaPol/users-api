const sqlite3 = require('sqlite3').verbose();  
let db = new sqlite3.Database('./users.sql', function(err) {  
    if (err) {
        throw err;  
        }
        console.log("Connected to Users DB!");  
});  

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
    });