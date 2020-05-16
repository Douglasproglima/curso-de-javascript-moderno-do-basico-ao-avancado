exports.index = (req, res) => {
  res.render('index');
  return; //Garante que não irá utilizar nenhum middlare
};