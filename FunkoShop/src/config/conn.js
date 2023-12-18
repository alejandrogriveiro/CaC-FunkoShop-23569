const mysql = require('mysql2');
/*const { Connection } = require('mysql2/typings/mysql/lib/Connection');*/
require('dotenv').config();

const pool = mysql.createPool({

    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    port: process.env.DBPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,

});

pool.getConnection((e, conn) => {

    if(e) {
        console.error('Error al conectarse a la BBDD: ' +  e);        
    } else {
      console.log('💾 Conexión a la BBDD exitosa 📀');
      conn.release();
    }

});

module.exports = {

    conn: pool.promise()
};

module.exports = pool;