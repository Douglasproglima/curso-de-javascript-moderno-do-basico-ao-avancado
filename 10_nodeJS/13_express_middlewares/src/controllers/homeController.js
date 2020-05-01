exports.index = (req, res) => {
    res.render('index');
    return; //Garante que não irá utilizar nenhum middlare
  };
  
  exports.validatePost = (req, res) => {
    res.send(req.body);
    return;//Garante que não irá utilizar nenhum middlare
  };