const validator = require('./validator');
const { check } = require("express-validator");

module.exports = new class UserValidator extends validator {
    handle(){
        return  [
          //name
            check("name", "نام کاربری صحیح نیست").not().isEmpty(),
            // username
            check("username", "نام کاربری صحیح نیست").not().isEmpty(),
            // password must be at least 8 chars long
            check("password", "طول پسورد باید حداقل 8 کاراکتر باشد").isLength({
              min: 8
            })
          ]
    }
}
