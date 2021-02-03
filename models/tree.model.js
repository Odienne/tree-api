const sql = require('./db');

const Tree = function (tree) {
    this.id = tree.tree_id
    this.name = tree.name
    this.price = tree.price
};

Tree.find = (id, result) => {
    sql.query("SELECT * FROM TREE WHERE tree_id = ?", [id], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        result({kind: 'not_found'}, null);
    })
}

Tree.findAll = (result) => {
    sql.query("SELECT * FROM TREE", (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res);
            return;
        }

        result({kind: 'not_found'}, null);
    })
}

Tree.create = (name, price, result) => {
    sql.query("INSERT INTO TREE (name, price) VALUES(?, ?)", [name, price], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(err, null);
        }
    })
}

Tree.delete = (id, result) => {
    sql.query("DELETE FROM TREE WHERE tree_id = ?", [id], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(err, null);
        }
    })
}

module.exports = Tree;