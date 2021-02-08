let controller = require('./controller');
const User = require('./../models/user');

const { validationResult } = require('express-validator');


class UserController extends controller {
  async getAllUsers(req, res, next) {
    try {
      let users = await User.find({});
      res.render("users", {
        users: users,
        title: "همه کاربران",
        errors: req.flash("errors"),
        message: req.flash("message")
      });
    } catch (error) {
      next(error);
    }
  }

  async seeOneUser(req, res, next) {
    try {
      let user = await User.findById(req.params.id);
      if(!user){
        this.error('چنین کاربری یافت نشد' , 404 );
      }
      res.render("user", { user: user });
    } catch (error) {
      next(error);
    }
  }

  async createUser(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        req.flash("errors", errors.array());
        return res.redirect("/user");
      }

      let newUser = new User({
          name : req.body.name,
          username : req.body.username , 
          password : req.body.password,
      });
      await newUser.save();
      req.flash("message", "کاربر مورد نظر با موفقیت ایجاد شد");
      return res.redirect("/user");
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      await User.updateMany({ _id: req.params.id }, { $set: req.body });
      req.flash("message", "کاربر مورد نظر با موفقیت به روز رسانی شد شد");
      return res.redirect("/user");
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      await User.deleteOne({ _id: req.params.id });
      req.flash("message", "کاربر مورد نظر با موفقیت حذف شد");
      return res.redirect("/user");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
