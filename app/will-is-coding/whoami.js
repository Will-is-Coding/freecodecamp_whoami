'use strict';

module.exports = {
    whoami: function(req, res) {
        var userinfo = { "ipaddress": null, "language": null, "software": null};
        var software = req.headers["user-agent"].match(/\((.+\d)\)/)[1];
        console.log(req.headers);
        var language = req.headers['accept-language'].match(/.+,/)[0];
        userinfo.software = software;//.substring(, software.length - 1);
        userinfo.ipaddress = req.headers["x-forwarded-for"];
        userinfo.language = language.substring(0, language.length - 1);
        return userinfo;
    }
};