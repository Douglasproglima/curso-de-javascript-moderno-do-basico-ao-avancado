"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _loginRequired2.default, _UserController2.default.index);
//router.get('/:id', userController.show);

router.post('/', _UserController2.default.store); //Cria usuários externamente
router.post('/', _loginRequired2.default, _UserController2.default.store); //Bloqueado
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/* Métodos Padrões em ES6
  index -> Lista Registro -> GET
  store/create -> Cria um novo registro -> POST
  delete -> Deleta um registro -> DELETE
  show -> Mostra um registro -> GET
  Update -> Atualiza um registro -> PATH or PUT
*/