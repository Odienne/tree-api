const sql = require('./db');

const User = function(user) {
    this.username = user.username,
    this.pwd = user.pwd
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO USER SET ?", newUser, (err) => {
        if (err) {
            console.log("erreur : ", err);
            result(err, null);
            return;
        }

        console.log("utilisateur créé");
    })
}

User.findByUsername = (username, result) => {
    sql.query("SELECT * FROM USER WHERE username = ?", username, (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("utilisateur trouvé");
            result(null, res[0]);
            return;
        }

        result({ kind: 'not_found' }, null);
    })
}

User.login = (username, pwd, result) => {
    sql.query("SELECT * FROM USER WHERE username = ? and pwd = ?", [username, pwd], (err, res) =>{
        if (err) {
            console.log("erreur : ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("utilisateur trouvé");
            result(null, res[0]);
            return;
        }

        result({ kind: 'not_found' }, null);
    })
}

User.login = (username, pwd, result) => {
    sql.query("SELECT * FROM USER WHERE username = ? and pwd = ?", [username, pwd], (err, res) =>{
        if (err) {
            console.log("erreur : ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("utilisateur trouvé");
            result(null, res[0]);
            return;
        }

        result({ kind: 'Informations de connexion erronées' }, null);
    })
}

module.exports = User;