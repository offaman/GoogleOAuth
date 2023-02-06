const express = require('express');
const router = express.Router();
const googleClientConfig = require('../config/configureGoogleClient')

router.get('/',(req,res)=>{
    try{
        const SCOPE = ['https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file']
        
        const oAuth2Client = googleClientConfig.createGoogleClient();
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPE,
        });
        res.send({'auth_url':authUrl})
    }
    catch(error){
        res.send({'Error':error})
    }
})

module.exports = router