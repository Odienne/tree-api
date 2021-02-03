module.exports = app => {
    const tree = require('../controllers/tree.controllers');

    app.get("/api/trees", tree.findAll);
    app.get("/api/tree/:id", tree.find);
    app.post("/api/tree/create", tree.create);
    app.delete("/api/tree/:id/delete", tree.delete);
}