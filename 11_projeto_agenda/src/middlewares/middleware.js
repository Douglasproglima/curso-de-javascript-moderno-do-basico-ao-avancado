exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash("errors");
  res.locals.success = req.flash("success");
  res.locals.user = req.session.user;
  next();
};

exports.othersMiddleware = (req, res, next) => {
  next();
};

exports.validateCsrfError = (err, req, res, next) => {
  if (err) return res.render("404"); //Criar uma página 404
  next();
};

/* MIDDLEWARES CSURF E HEMELT */
exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

exports.loginRequiredMiddleware = (req, res, next) => {
  if (!req.session.user) {
    req.flash("errors", "Você precisa fazer login.");
    req.session.save(() => res.redirect("/"));
    return;
  }

  next();
};
