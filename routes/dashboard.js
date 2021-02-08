const express = require("express");
const router = express.Router();

//controllers
const dashboardController =  require('controllers/dashboardController');

router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
})

//controllers
const productController =  require('controllers/productController');

//validators
const productValidator = require('validators/productValidator');

router.get("/",  dashboardController.index );
router.get("/",  productController.getAllProducts );
router.get("/:id", productController.seeOneProduct);
router.post( "/", productValidator.handle() ,  productController.createProduct );
router.put("/:id", productController.updateProduct );
router.delete("/:id", productController.deleteProduct );




module.exports = router;
