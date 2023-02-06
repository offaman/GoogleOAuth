const express = require('express');
const router = express.Router();
const googleClientConfig = require('../config/configureGoogleClient')

router.get('/',async(req,res)=>{
    try{
        const oAuth2Client = googleClientConfig.createGoogleClient();
        const result = await oAuth2Client.getToken(req.query.code)
        res.send({"token":result.tokens})
    }catch(error){
        res.send({"Error":error})
    }
})

module.exports = router