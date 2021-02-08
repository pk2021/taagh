let controller = require('./controller');



class indexController extends controller {
    async Authentication(req,res,next){
        if(req.isAuthenticated()){
            let signedin = true;
            let button = {
                href: "/dashboard",
                text:'پروفایل کاربر'
            };
            
            return res.render('index',{button, signedin})
        }
        let signedin = false;
        let button = {
            href: "/auth/login",
            text:'ورود/عضویت'
        };
        res.render('index',{button, signedin})
    }
}


module.exports = new indexController();