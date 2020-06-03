import multer from 'multer';
import { extname, resolve } from 'path';

const randomName = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  //Define o upload apenas de imagens
  fileFilter: (req, file, callback) => {
    console.log(file.minetype);
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg')
      return callback(new multer.MulterError('São aceitos somentes arquivos PNG ou JPG.'));

      return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${randomName()}${extname(file.originalname)}`);
    },
  }),
};