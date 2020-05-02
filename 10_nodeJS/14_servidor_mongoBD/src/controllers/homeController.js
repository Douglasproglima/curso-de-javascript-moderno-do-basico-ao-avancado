//const HomeModel = require('../models/HomeModel');

/*
HomeModel.create({
  title: 'Corona Vírus',
  description: '01/05/2020 - Número de casos só aumenta'
})
  .then(result => console.log(result))
  .catch(error => console.log(error));
*/

//Retorna todos os dados salvos
/*
HomeModel.find()
  .then(result => console.log(result))
  .catch(error => console.log(error));

exports.index = (req, res) => {
    res.render('index');
    return; //Garante que não irá utilizar nenhum middlare
  };
*/
  
  exports.validatePost = (req, res) => {
    res.send(req.body);
    return;//Garante que não irá utilizar nenhum middlare
  };