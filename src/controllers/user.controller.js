const User = require("../models/user");


exports.get = function (req,res){
    const User = require("./src/models/user");
    User.find({}).then(rs=>{
        res.render("user/userlist",{
            items: rs
        });
    }).catch(err=>{
        res.send(err);
    });
}
exports.addUser = (req,res)=>{
    res.render("user/adduser");
};
exports.save = (req,res)=>{
    let s = req.body;
    const User = require("./src/models/user");
    let newUser = new User(s);
    newStudent.save().then(rs=>{
        res.redirect("/users");
    }).catch(err=>{
        res.send(err);
    })
};