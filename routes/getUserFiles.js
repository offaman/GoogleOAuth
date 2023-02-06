const express = require('express');
const router = express.Router();
const googleClientConfig = require('../config/configureGoogleClient')
const {google} = require('googleapis')

router.get('/',async(req,res)=>{
    try{
        const oAuth2Client = googleClientConfig.createGoogleClient();
        oAuth2Client.setCredentials(req.body.token);
        const drive = google.drive({ version: 'v3', auth: oAuth2Client });
        const driveData = await drive.files.list({ pageSize: 20 })
        res.send({"Files": driveData.data.files})
    }catch(error){
        res.send({"Error": error})
    }
})

module.exports = router