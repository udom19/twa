const articles = require('../articlesjson');

exports.getAdmin = function (req, res) {
  const response = { articles };
  res.json(response);
};
