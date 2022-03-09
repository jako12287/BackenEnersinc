const jwt = require("jsonwebtoken")
const { Register } = require('../db')


const verifyTokken = async(req, res, next)=>{

    // authorization: Barrer <tkken>

    const beareHeader = req.headers['authorization'];

    if(typeof beareHeader !== 'undefined'){

        let token = beareHeader.split(' ')[1];
        req.token = token;
        next();

    }else{
       return res.sendStatus(403)
    }

   
}

module.exports = verifyTokken

