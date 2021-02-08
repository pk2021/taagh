let controller = require("./controller");
const User = require("./../models/user");

const { validationResult } = require("express-validator");

module.exports = new class dashboardController extends controller {
  async index(req, res, next) {
    try {
      let user = req.user;
      res.render('dashboard/index',{user : user})
    } catch (err) {
      next(err);
    }
  }

}


