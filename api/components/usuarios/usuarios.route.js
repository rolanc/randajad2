const express = require('express'),
      router = express.Router(),
      users = require('./usuarios.api');

router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

router.route('/save_usuario')
  .post((req, res) => {
    users.registrar(req,res);
});

router.route('/get_all_usuario')
  .get((req, res) => {
    users.listarTodos(req,res);
});

router.route('/update_usuario')
  .put((req, res) => {
    users.actualizar(req,res);
});

module.exports = router;