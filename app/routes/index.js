'use strict';

var whoami = require('../will-is-coding/whoami.js');

module.exports = function (app, passport) {
		
	app.get('/', function(req, res) {
		res.json(whoami.whoami(req, res));
	});

};
