module.exports = app => {
    const users = require('../controllers/users.controllers');

    app.post("/api/user", users.create);

    app.get("/api/user/:username", users.findOneByUsername);

    app.get("/api/user/:username/:pwd", users.findOneToLogin);
}