exports.index = (req, res) => {
  res.render('index');
  console.log(req.body);
  return; //Garante que não irá utilizar nenhum middlare
};