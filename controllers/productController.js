let controller = require('./controller');
const Product = require('./../models/product');

const { validationResult } = require('express-validator');


class ProductController extends controller {
  async getAllProducts(req, res, next) {
    try {
      let product = await Product.find({});
      res.render("index", {
        product: product,
        title: "all products",
        errors: req.flash("errors"),
        message: req.flash("message")
      });
    } catch (err) {
      next(err);
    }
  }

  async seeOneProduct(req, res, next) {
    try {
      let product = await Product.findById(req.params.id);
      if(!user){
        this.error('چنین کاربری یافت نشد' , 404 );
      }
      res.render("index", { product: product });
    } catch (err) {
      next(err);
    }
  }

  async createProduct(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        req.flash("errors", errors.array());
        return res.redirect("/user");
      }

      req.body.id = parseInt(req.body.id);
      let newUser = new User({
          name: req.body.name,
          picture: req.body.picture, 
          picture: req.body.picture, 
          city: req.body.city, 
          quantity: req.body.quantity, 
          L_price: req.body.L_price, 
          H_price: req.body.H_price, 
          description: req.body.description, 
          date: new Date(Date.now()), 


      });
      await newUser.save();
      req.flash("message", "کاربر مورد نظر با موفقیت ایجاد شد");
      return res.redirect("/dashboard");
    } catch (err) {
      next(err);
    }
  }

  async updateProduct(req, res, next) {
    try {
      await Product.updateMany({ _id: req.params.id }, { $set: req.body });
      req.flash("message", "کالای مورد نظر با موفقیت به روز رسانی شد ");
      return res.redirect("/dashboard");
    } catch (err) {
      next(err);
    }
  }

  async deleteProduct(req, res, next) {
    try {
    } catch (err) {
      await User.deleteOne({ _id: req.params.id });
      req.flash("message", "کالای مورد نظر با موفقیت حذف شد");
      return res.redirect("/dashboard");
    }
  }
}

module.exports = new ProductController();
