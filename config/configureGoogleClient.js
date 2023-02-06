const {google} = require('googleapis')
const credentials = require('./credentials.json')


module.exports.createGoogleClient = () =>{
    const client_id = credentials.web.client_id;
    const client_secret = credentials.web.client_secret;
    const redirect_uris = credentials.web.redirect_uris;
    return new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])
}