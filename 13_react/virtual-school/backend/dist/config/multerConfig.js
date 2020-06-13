"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const randomName = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  //Define o upload apenas de imagens
  fileFilter: (req, file, callback) => {
    console.log(file.minetype);
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg')
      return callback(new _multer2.default.MulterError('São aceitos somentes arquivos PNG ou JPG.'));

      return callback(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, callback) => {
      callback(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${randomName()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};