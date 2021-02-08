
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser(async (id,done)=>{
    let user = await User.findById(id);
    if(user) done(null,user);
})


passport.use("local.register" , new localStrategy(
    {
        usernameField : 'username' ,
        passwordField : 'password',
        passReqToCallback : true ,
    } , async (req , username , passport , done)=>{
       try {
        let user = await User.findOne({username : req.body.username});
        if(user){
            return done(null,false,req.flash('errors' , "چنین کاربری با این ایمیل/شماره وجود دارد"));
        }
        const newUser = new User({
            name : req.body.name , 
            username : req.body.username , 
            password : req.body.password , 
            picture : req.body.picture , 
        });

        await newUser.save();
        done(null,newUser);
       } catch (error) {
           return done(error , false , {message : error})
       }
    }

))

passport.use('local.login' ,new localStrategy(
    {
        usernameField : 'username' ,
        passwordField : 'password',
        passReqToCallback : true ,
    } , async (req,username,password , done)=>{
        try {
            let user = await User.findOne({username : req.body.username});
            if(!user || user.password != req.body.password){
                return done(null , false , req.flash('errors' , 'اطلاعات شما هماهنگی ندارد'));
            }
            done(null , user);
        } catch (error) {
            return done(error , false , {message : error})
        }

} ))