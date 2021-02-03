const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    port: dbConfig.PORT
});

// ouverture de la connexion mysql et création de la base et des tables
connection.connect(error => {
    if (error) throw error;
    connection.query('CREATE DATABASE IF NOT EXISTS `donate_tree`', function (err, result) {
        if (err) throw err;

        connection.query('USE `donate_tree`', function (err, result) {
            if (err) throw err;

            connection.query('CREATE TABLE IF NOT EXISTS `USER` (user_id INTEGER PRIMARY KEY AUTO_INCREMENT,' +
                'username VARCHAR(30) NOT NULL, pwd VARCHAR(100) NOT NULL,' +
                'role VARCHAR(35) DEFAULT "user");', function (err, result) {
                if (err) throw err;

                connection.query('CREATE TABLE IF NOT EXISTS `TREE` ' +
                    '(tree_id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(30) NOT NULL, price INTEGER NOT NULL);', function (err, result) {
                    if (err) throw err;
                });
            });
        });
    });
});

module.exports = connection;