"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
  try {
      const newUser = await _User2.default.create(req.body);
      const { id, name, email } = newUser;

      return res.json({ id, name, email });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((erro) => erro.message)
      });
    }
  }

  //Index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({
        attributes: ['id', 'name', 'email'],
        order: [['id', 'DESC']],
      });
      return res.json(users);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((erro) => erro.message)
      });
    }
  }

  //Show
  async show(req, res) {
    try {
      //const { id } = req.params;
      const user = await _User2.default.findByPk(req.params.id);
      const { id, name, email } = user;

      return res.json({ id, name, email });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((erro) => erro.message)
      });
    }
  }

  //Update
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if(!user) {
        return res.status(400).json({
          erros: ['Nenhum registro encontrado'],
        });
      }

      const userUpdate = await user.update(req.body);
      const {id, name, email} = userUpdate;
      return res.json({id, name, email});
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((erro) => erro.message)
      });
    }
  }

  //Delete
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if(!user) {
        return res.status(400).json({
          erros: ['Nenhum registro encontrado'],
        });
      }

      await user.destroy();
      return res.json({
        message: 'Registro deletado com sucesso',
      });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((erro) => erro.message)
      });
    }
  }
}

exports. default = new UserController();