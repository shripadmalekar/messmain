const mysql = require('mysql')
function connect(){
    const connection = mysql.createConnection({
        host:'localhost',
        user:'admin',
        password:'admim',
        database:'mess',
        port:3306
    })
    connection.connect()
    return connection
}
module.exports={
    connect: connect
}