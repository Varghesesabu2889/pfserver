
const users = require('../Models/userSchema');
const user = require('../Models/userSchema')


//register
exports.register = async (req,res)=>{
    console.log("inside  register controller function");
    const{username,email,password}= req.body;
     //checking if the username and password
    //  console.log(`${username},${email},${password}`);
    const existingUser = await  user.findOne({ email: email })
    try{
    if(existingUser){
        res.status(406).json("user already exist...please login!!!")
    }else{
        const newUser = new users({
            username,email,password,github:"",linkedin:"",profile:""
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
}
catch(err) {
    res.status(401).json(`register api failed ,Error ,${err}`)
}
}