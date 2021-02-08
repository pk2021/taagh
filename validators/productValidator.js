const validator = require('./validator');
const { check } = require("express-validator");

module.exports = new class ProductValidator extends validator {
    handle(){
        return  [
            check("name", "نام کاربری صحیح نیست").not().isEmpty(),
            check("city", "نام کاربری صحیح نیست").not().isEmpty(),
            check("quantity", "نام کاربری صحیح نیست").not().isEmpty(),
            check("L_price", "نام کاربری صحیح نیست").isNumeric().not().isEmpty(),
            check("H_price", "نام کاربری صحیح نیست").isNumeric().not().isEmpty(),
            check("picture", "نام کاربری صحیح نیست").not().isEmpty(),
            check("description", "نام کاربری صحیح نیست").not().isEmpty(),
          ]
    }
}
