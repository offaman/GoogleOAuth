const express = require('express');
const router = express.Router();
const googleClientConfig = require('../config/configureGoogleClient')
const {google} = require('googleapis')

router.get('/',async(req,res)=>{
    try{
        const oAuth2Client = googleClientConfig.createGoogleClient();
        oAuth2Client.setCredentials(req.body.token);
        const oauth2 = google.oauth2({ version: 'v2', auth: oAuth2Client });
        let userInfo = await oauth2.userinfo.get()
        res.send({"UserProfile": userInfo.data})
    }catch(error){
        res.send({"Error": error})
    }
})

module.exports = router