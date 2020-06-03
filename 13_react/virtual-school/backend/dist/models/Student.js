"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Student extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'O nome do aluno já existe.',
        },
        validate: {
          len: {
            args: [4, 20],
            msg: 'O campo Nome precisa conter entre 4 há 20 caracteres.',
          },
        },
      },
      lastname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'O nome do aluno já existe.',
        },
        validate: {
          len: {
            args: [4, 20],
            msg: 'O campo Nome precisa conter entre 4 há 20 caracteres.',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe.',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },
      age: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro.',
          },
        },
      },
      weight: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou decimal.',
          },
        },
      },
      height: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou decimal.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, {  foreignKey: 'student_id' });
  }
} exports.default = Student;