/*
https://sequelize.org/docs/v6/getting-started/ - let you set up a mysql server and validate
CRUD operations.
https://sequelize.org/docs/v6/core-concepts/model-basics/ - read through this module if possible.

*/

const Sequelize = require('sequelize')
const connection = new Sequelize(
    'ecom_db',
    'root',
    '',
    {
        host: "127.0.0.1",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 1,
            acquire: 5000,
            idle: 10000
        }

        /*
             -------------------------------------
            |  Conn1   | Conn2  |  Conn3 |  Conn4 |
             -------------------------------------
        */
        //tcp ports : souce_ip source_port dest_ip dest_port
    }
);

async function validateConnection() {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully!');
    } catch(error) {
        console.error('Unable to connect to database:', error);
    }
}

validateConnection();