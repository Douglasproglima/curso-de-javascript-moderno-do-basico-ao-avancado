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

exports.index = (req, res) => {
  //Cria a sessão
  //req.session.user = { name: 'douglasproglima', logged: true }; 
  console.log(req.session.user);
  
  //Cria as mensagens de exibição
  /*req.flash('error', 'Erro no FlashMessage');
  req.flash('info', 'Hello World');
  req.flash('success', 'Success FlashMessage');*/
  console.log(req.flash('error'), req.flash('info'), req.flash('success'));
  
  //Primeira forma de injetar conteúdo na view(index)
  res.render('index', {
    title: '',
    h1: 'Titulo Definido no <span style="color: red;">HomeController</span>',
    numbers: ['MG', 'SP', 'RJ', 'MA']
  });
  return; //Garante que não irá utilizar nenhum middlare
};

exports.validatePost = (req, res) => {
  res.send(req.body);
  return;//Garante que não irá utilizar nenhum middlare
};