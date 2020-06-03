"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).json({
      erros: ['Login não autorizado'],
    });
  }

  const [text, token] =  authorization.split(' ');
  try {
    const dates = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);

    //Atrelando os dados na requisição, qualquer page que obter esse middleware na requisição irá ter o user e password
    const { id, email } = dates;

    const user = await _User2.default.findOne({
      where: {
        id: id,
        email: email
      }
    });

    if(!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    return res.status(401).json({
      erros: ['Token expirado ou inválido.'],
    });
  }

};